export default function boardInfo (){
    return(
        <div className='info-container'>
            <div className="title-container">
                <input
                id="title"
                placeholder="Title:"
                className="title-input"
                type="text"                                            
                />
            </div>
            <div className="description-container">
                <input
                id="description"
                className="description-input"
                type="text"
                placeholder="Description: maximum 120 char" 
                size="120"
                />
                </div>
            <div>
                <input type="color" id="head" name="head"/>
                <label htmlFor="head"> Canvas Color</label>
            </div>
        </div>
    )    
}