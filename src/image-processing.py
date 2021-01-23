import PyPDF2 as pypdf 

#load in one pdf - los angeles
losangeles = pypdf.PdfFileReader("mei-files/MEI-2020-Los-Angeles-California.pdf")
laNumPages = losangeles.getNumPages()

#extract the text from each page
textList = [""] #initialize empty textList
for i in range(laNumPages - 1):
    currPage = losangeles.getPage(i) #pages start indexed at 0
    textList[i] = currPage.extractText

#print(textList[0])
