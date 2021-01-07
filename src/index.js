import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import List from './List';


const Main = () => {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [message,setMessage] = useState({show:false,msg:'',type:''});
  const [isEdit,setIsEdit] = useState(false);
  const [editId,setEditId] = useState('');

  const showAleart = (show=false,msg='',type='')=> {
    setMessage({show,msg,type});
  }

  const addToList = (e) => {
    e.preventDefault();
    if(!name) {
      showAleart(true,"Empty can not be added","danger");
    }else if(isEdit && name) {
      showAleart(true,"Item Edited","not-danger");
      const newList = [];
      for(var x of list) {
        if(x.id===editId) newList.push({id:x.id,title:name})
        else newList.push(x);
      }
      setList(newList);
      setIsEdit(false);
    }else {
      showAleart(true,"Item Added","not-danger");
      const newItem = {id: new Date().getTime().toString(),title: name };
      const newList = [...list,newItem];
      setList(newList);
    }
    setName('');
  }

  const removeItem = (id) => {
    const newList = list.filter((item)=> item.id!== id);
    setList(newList);
    showAleart(true,"Item Removed","danger");
  }

  const editItem = (id) => {
    const item = list.find((single)=> single.id===id);
    setName(item.title);
    setIsEdit(true);
    setEditId(id);
  }

  const removeAll = ()=> {
    showAleart(true,"List Cleared","danger");
    setList([]);
  }

  const saveFile = () => {
    console.log('Need API');
  }

  return <main>
    <h1><strong>Grocery List</strong></h1>
    {message.show? <Message message={message} removeMessage={showAleart}/>:''}
    <form onSubmit={addToList}>
      <input 
      value={name} 
      type="text" 
      className="form-control"
      placeholder="e.g. Eggs"
      onChange={(e)=> setName(e.target.value)} />
      <button className='btn' type="submit">{!isEdit? <i className="fa fa-plus">Add</i>:<i className="fa fa-edit">Edit</i>}</button>
    </form>
    <List list={list} removeItem={removeItem} editItem={editItem}/>

    <div className='button-container'>
      <button className='btn col-6' onClick={()=>saveFile()} ><i className="fa fa-save"></i> Save</button>
      <button className='btn col-6' onClick={()=>removeAll()}><i className="fa fa-trash"></i> Remove All</button>
    </div>
  </main>
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
