import PyPDF2 as pypdf 

losangeles = pypdf.PdfFileReader("mei-files/MEI-2020-Los-Angeles-California.pdf")
print(losangeles.getNumPages()) 
