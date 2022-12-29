export default function Notation(){
    return (
        <>
            <div id="digits">
                {[8,7,6,5,4,3,2,1].map(
                    i => <p className={"notation"} key={i}>{i}</p>)
                }
            </div>

             <div id="letters">
                <p className="notation">a b c d e f g h</p>
             </div>

        </>
    )
}