from flask import Flask, request, render_template

# define app
app = Flask(__name__)


@app.route("/", methods=["POST"])
# handle Post request
def GetBarcode():
    data = request.get_data("ID", as_text=True)
    with open("File.txt", "a") as my_db:  # add barcode into text file
        my_db.write(data)
        my_db.write("\n")
    return "ok"


@app.route("/hema_dashboard")
def HeamatologyDashboard():
    return render_template("HeamatologyDashboard.html")


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
