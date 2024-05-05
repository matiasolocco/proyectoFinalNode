PROYECTO FINAL NODE

Este proyecto esta orientado a aviation geeks que quieran tener un registro personal de los aviones en los que han volado.

Se han hecho tres relaciones entre USERS > AIRCRAFT > AIRLINE en el que tenemos dos bases de datos, cuya principial es AIRCRAFT ya que es lo que más nos interesa modificar al ser el objetivo principal de interacción con el usuario.

Se ha creado la BBDD para Airline en lugar de añadirla manualmente como una característica más del avión ya que, aunque no es tan frecuente, una aerolínea puede cambiar de nombre. 
Por ejemplo, hace unos años, las aerolíneas latinoamericanas Lan, Chile, Lan Argentina, Lan Ecuador, LAN Colomboa y TAM Brasil, se unificaron bajo el nombre de LATAM ARILINES. Entonces al tener separadas a las aerolineas en una base de datos independientes, las puedo manipular unificandolas o caambiándoles el nombre.
Otro ejemplo es el de Alitalia que recientemente ha pasado a llamarse ITA Airwas, pero los aviones son exactamente lo mismo ya que lo que se hace en estos casos es olamente repintarlos.

Las rutas más interesantes en este proyecto, son las siguientes:
1) http://localhost:5001/user/login --> en donde puedo logearme de forma provada y ver los aviones en los que he volado. 
2) http://localhost:5001/user/update/:id --> para añadir nuevos aviones que ya existen en la BBDD
3) http://localhost:5001/aircraft/add --> para añadir nuevos aviones a mi BBDD
4) http://localhost:5001/user/select --> para ver todos los usuarios registrados con los aviones en los que han volado.
5) http://localhost:5001/aircraft/select --> para ver todas los aviones que hay cargados en nuestra BBDD que se relacionan con las BBDD de aerolineas.
