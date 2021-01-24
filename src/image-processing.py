import PyPDF2 as pypdf 

#load in one pdf - los angeles
losangeles = pypdf.PdfFileReader("mei-files/MEI-2020-Los-Angeles-California.pdf")
laNumPages = losangeles.getNumPages()
laInfo = losangeles.getDocumentInfo()

#separate each page into a list
textList = ["", ""] #initialize empty textList. each document is 2 pages, so 2 items is enough.

for i in range(laNumPages):
    currPage = losangeles.getPage(i) #pages start indexed at 0
    textList[i] = currPage.extractText()
    #print(textList[i])
    i+=1

