import React from 'react'

const List = ({list,removeItem,editItem}) => {

    return (
        <section className='list'>
            {list.map((item)=>{
                const {id,title} = item;
                return (
                    <section className='items' key={id}>
                        <div className='para'>
                            <p>{title.length>25? title.substring(0,25)+'...':title}</p>
                        </div>
                        <div className='btns'>
                            <button style={{color:"#5cb85c"}} className='btn fa fa-edit' onClick={()=>editItem(id)}></button>
                            <button style={{color:"#d9534f"}} className='btn fa fa-trash' onClick={()=>removeItem(id)}></button>
                        </div>
                    </section>
                )
            })}
        </section>
    );
}

export default List
