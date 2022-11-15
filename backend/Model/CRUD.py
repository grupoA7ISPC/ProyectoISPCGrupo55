import mysql.connector

class Conectar():

    def __init__(self) -> None:
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                port = 3306,
                user = 'root',
                password = 'root',
                db = 'mis_rutinas'

            )
        except mysql.connector.Error as descripcionError:
            print("¡No se conectó!",descripcionError)

#PRIMERA OPERACIÓN DEL CRUD: CREATE O INSERT.
    def InsertarValor(self,nombre, apellido, fec_nac, nom_user, email, password, fecha_ing):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "INSERT INTO usuario VALUES(%s,%s,%s,%s,%s,%s,%s)"
                data= (nombre, apellido, fec_nac, nom_user, email, password, fecha_ing)
                cursor.execute(sentenciaSQL,data)
                self.conexion.commit()
                self.conexion.close()

            except:
                print("No se pudo concectar a la base de datos")
   
#SEGUNDA OPERACION DEL CRUD: READ O LEER
    def BuscarObjeto(self, dato):        
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "SELECT * FROM usuario WHERE nombre LIKE '%s' "
                data= (dato)
                cursor.execute(sentenciaSQL,data)
                resultadoREAD = cursor.fetchall()
                self.conexion.close()
                return resultadoREAD

            except:
                print("No se pudo concectar a la base de datos")

#TERCERA OPERACION DEL CRUD: UPDATE o ACTUALIZAR
    def BuscarObjeto(self, dato, ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL= "UPDATE usuario SET nombre = '%s' WHERE id_user = '%s'"
                data= (dato, ID)
                cursor.execute(sentenciaSQL, data)
                resultadoREAD = cursor.fetchall()
                self.conexion.close()
                return resultadoREAD

            except:
                print("No se pudo concectar a la base de datos")

 #CUARTA OPERACION DEL CRUD: DELETE O ELIMINAR
    def EliminarObjeto(self,ID):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentenciaSQL = "DELETE FROM usuario WHERE id = '%s'"
                data= (ID)
                cursor.execute(sentenciaSQL, data)                
                self.conexion.commit()                
                self.conexion.close()
            except:
                print("No se pudo concectar a la base de datos")