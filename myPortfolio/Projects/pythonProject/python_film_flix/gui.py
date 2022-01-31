
from guizero import App, Text, TextBox, PushButton, Picture, ButtonGroup


import sqlite3
conn = sqlite3.connect("MyFilms.db")
cursor = conn.cursor()



app = App(title="Film Flix App", bg="blue")

# pic = Picture(app, image="pictures/puppy2.png")
# picMovie = Picture(app)


# txtMovieId = Text(app, text="Display film ID ")
# txtBID = TextBox(app)
# txtMovie = Text(app, text="Search Film")
# txtMovie = TextBox(app)




from guizero import App, Text, Picture
app = App("Wanted!")
app.bg = "#FBFBD0"
wanted_text = Text(app, "WANTED")
wanted_text.text_size = 50
wanted_text.font = "Times New Roman"








app.display()
