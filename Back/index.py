from flask import Flask,request
from flask_cors import CORS
import requests
import json
import MySQLdb

hostname = '35.239.93.30'
username = 'sopes1'
password = 'basefinal'
database = 'final'


app = Flask(__name__)
# Settings
CORS(app)

@app.route('/')
def index():
    return 'Hello World'


@app.route('/login',methods=['POST'])
def iniciarsesion():
    dato=request.json
    myConnection = MySQLdb.connect( host=hostname, user=username, passwd=password, db=database )
    cur = myConnection.cursor()
    cur.execute('''SELECT nombre,correo,password from Usuario''')
    rv = cur.fetchall()
    for x in rv:
        if x[1]== dato['correo'] and x[2]==dato['password']:
            res = {
                "code":200,
                "nombre":x[0]
            }
            
            return res
    return "{\"code\":300}"

    


@app.route('/registro',methods=['POST'])
def registro():
    dato=request.json
    print(dato)
    myConnection = MySQLdb.connect( host=hostname, user=username, passwd=password, db=database )
    cur = myConnection.cursor()
    cur.execute("INSERT INTO Usuario(nombre,correo,password) VALUES (%s, %s,%s)", (dato['nombre'], dato['correo'],dato['password']))
    myConnection.autocommit(True)
    cur.close()
    return "{\"code\":200}"

@app.route('/juego',methods=['POST'])
def juego():
    dato=request.json
    print(dato)
    myConnection = MySQLdb.connect( host=hostname, user=username, passwd=password, db=database )
    cur = myConnection.cursor()
    cur.execute("INSERT INTO Juego(Nombre,Descripcion,Url,Precio) VALUES (%s, %s,%s,%s)", (dato['nombre'], dato['descripcion'],dato['url'],dato['precio']))
    myConnection.autocommit(True)
    cur.close()
    return "{\"code\":200}"    

@app.route('/juego')
def juego_get():
   
    myConnection = MySQLdb.connect( host=hostname, user=username, passwd=password, db=database )
    cur = myConnection.cursor()
    cur.execute("select Nombre,Descripcion,Url,Precio from Juego")
    row_headers=[x[0] for x in cur.description] #this will extract row headers
    rv = cur.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

if __name__ == "__main__":
    app.run(port="4200",host="0.0.0.0",debug=True)
