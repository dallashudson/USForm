from PyPDF2 import PdfFileReader
from pathlib import Path

pdf_path =("pdfPopulation/line_report/linereporttemplate.pdf")

pdf = PdfFileReader(str(pdf_path))
fields = pdf.getFields()
for field_name, value in fields.items():
        field_value = value.get('/V', None)
        print(field_name, ':', field_value)

print(pdf_path)