// x-rud basic 0.0.1 beta -> 02/08/2019 17:00 am Brazil Time; UTC-3

var db = firebase.firestore();
var xrudDevMode = false; // true value for a console mode, and false for production environment
console.log('Carregando biblioteca...');

    function xrud_debug($message){
        if (xrudDevMode == true){
            console.log("Debug: "+$message);
        }
    }

    function xrud_send($collection, $document, $data) {
        let dataRef = db.collection($collection);
            dataRef.doc($document).set($data); // Create or update a new document with data
                xrud_debug($data);
    }

    function xrud_delete($collection, $document){
        let dataRef = db.collection($collection).doc($document).delete().then(function() {
                xrud_debug('The document is deleted!');
            }).catch(function(error) {
                    xrud_debug('Code 22');
                });
    }

    function xrud_read($collection){
        db.collection($collection).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                let result = JSON.stringify(doc.data());
                if (xrudDevMode == false) {
                    xrud_miniController(result);
                } else {
                    xrud_debug(result);
                }
             });
        });
    }

    function xrud_block($collection){
        db.collection($collection).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                let result = JSON.stringify(doc.data());
                console.log(result);
             });
        });
    }

    function xrud_search($document, $where, $by){
        let dataRef = firebase.firestore();
            dataRef.collection($document).where($where, "==", $by)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
           // console.log(doc.id, " => ", doc.data());
            let result = JSON.stringify(doc.data());
            if (xrudDevMode == false) {
                    xrud_miniController(result);
                } else {
                    xrud_debug(result);
                }
        });
        })
        .catch(function(error) {
        console.log("Error getting documents: ", error);
        });
    }


   