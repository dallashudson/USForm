from PyPDF4 import PdfFileReader, PdfFileWriter
from PyPDF4.generic import BooleanObject, NameObject, IndirectObject
from fillpdf import fillpdfs

from pathlib import Path
import json

from fillpdf import fillpdfs

def generatePdfs(facNumber, tester, date):
    fillpdfs.get_form_fields("pdfPopulation/line_report/linereporttemplate.pdf")

    # returns a dictionary of fields
    # Set the returned dictionary values a save to a variable
    # For radio boxes ('Off' = not filled, 'Yes' = filled)

    #data_dict = {
    #            "facilityNumber": facNumber,
    #            "testerName": tester,
    #            "date": date
    #            }

    stationInfo = open('pdfPopulation/line_report/line_report_info.json')
    stationForPdf = json.load(stationInfo)
    stationToForms = None

    for station in stationForPdf['locations']:
            for field, value in station.items():
                if (field == "facilityNumber" and value == facNumber):
                        stationToForms = station
                        break
    print(stationToForms)
    stationToForms['testerName'] = tester
    stationToForms['date'] = date
    stationToForms['date2'] = date

    outputName = str(stationToForms['locationName']).replace(" ", "") + str(stationToForms['facilityNumber']) + 'LINE-REPORT'
    fillpdfs.write_fillable_pdf('pdfPopulation/line_report/linereporttemplate.pdf', outputName + '.pdf', stationToForms)

    # If you want it flattened:
    #Functions
    fillpdfs.flatten_pdf(outputName + ".pdf", outputName + 'signed.pdf')


def main(facNumber, tester, date):
    generatePdfs(facNumber, tester, date)

if __name__ == "__main__":
    main(69420, "Dallas Hudson", "4/3/2022")



