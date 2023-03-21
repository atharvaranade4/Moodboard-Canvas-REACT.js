export default function boardInfo (){
    return(
        <div className='info-container'>
            <div className="into-title_container">
                <input
                id="title"
                placeholder="TITLE:"
                className="title-input"
                type="text"                                            
                />
            </div>
            <div className="description-container">
                <input
                id="description"
                className="description-input"
                type="text"
                placeholder="DESCRIPTION: Maximum 120 char" 
                size="120"
                />
                </div>
            <div>
                <label htmlFor="head"> Canvas Color</label>
                <input type="color" id="head" name="head"/>
            </div>
        </div>
    )    
}