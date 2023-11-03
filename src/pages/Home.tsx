export default function Home()
{
    return( 
        <>
        <div className=" ">
            <div className="grid grid-cols-3 gap-3 items-center justify-center">
                    <div><img id="num0" src="/pregunta.png" width= "150px" height="130px" onclick="{cargarNum(0);}"/>
                    </div>
                    <div></div>
                    <div><img id="num1" src="/pregunta.png" width= "150px" height="130px" onclick="{cargarNum(1)}"/></div>
                    <div></div>
                    <div><img id="num2" src="/pregunta.png" width= "150px" height="130px" onclick="{cargarNum(2)}"/></div>
                    <div></div>
                    <div><img id="num3" src="/pregunta.png" width= "150px" height="130px" onclick="{cargarNum(3)}"/></div>
                    <div></div>
                    <div><img id="num4" src="/pregunta.png" width= "150px" height="130px" onclick="{cargarNum(4)}"/></div> 
            </div>
        
        </div>
        
        </>
        )
}
