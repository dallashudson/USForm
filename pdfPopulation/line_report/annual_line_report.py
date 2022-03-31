from pdfrw import PdfReader, PdfWriter

pdf_output = "output.pdf"

template_pdf = PdfReader('linereporttemplate.pdf')
print(template_pdf)
exit