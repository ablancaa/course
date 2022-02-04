<template>
        <main class="container">
            <h1 class="titulo">Presentación</h1>
            <article>
                <div class="card">
                <p class="p-3">Las quemaduras, traumatismos potencialmente graves y afortunadamente de baja incidencia,
                generan muchas dudas en su actuación a la mayoría del colectivo sanitario no especializado.
                </p>
                <p class="p-3">Este Curso teórico-práctico intenta aportar herramientas para mejorar el manejo de este tipo de traumatismo.</p>
                </div>
            </article>
            <br/>
            <article>
                <div class="card">
                <h5 class="card-title p-3 fondo_parrafo"><strong>OBJETIVOS GENERALES DEL CURSO:</strong></h5>
                <p class="p-3">Los asistentes aprenderán a valorar y tratar correctamente las quemaduras así como a orientar e iniciar el tratamiento de las lesiones que requieran su traslado a la Unidad de Quemados.</p>
                </div>
            </article>
            <br/>
            <article>
                <div class="card">
                <h5 class="card-title p-3 fondo_parrafo"><strong>METODOLOGÍA:</strong></h5>
                <p class="p-3">El curso constará de dos jornadas. Un primer día en el que se impartirán contenidos teóricos mediante presentaciones magistrales que estarán
                    apoyadas por soporte audiovisual y discusión de casos promoviendo el intercambio de ideas entre los asistentes y los ponentes</p>
                    <p class="p-3">En el segundo día se realizarán talleres prácticos sobre técnicas específicas
                        en el paciente quemado y taller de apósitos y vendajes donde los asistentes tomarán parte activa actuando en su ejecución.</p>
                        <p class="p-3">También estarán apoyadas por pequeñas introducciones teóricas así como soporte audiovisual</p>
                </div>
            </article>
        </main>
</template>

<script>
export default { name: 'Presentacion' }
</script>

<style lang="scss" scoped>

.titulo{
    background-color:#3D6DA3;
    color: white;
    border-radius: 10px;
    padding: 3px;
}

article{
    text-align: left;
}

.fondo_parrafo{
    background-color: burlywood;
    border-radius: 15px;
}

.card{
    border: 0px;
}
</style>
