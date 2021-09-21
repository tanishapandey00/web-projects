import React, { useState, useEffect } from 'react';
import "./style.css";
//Geting Local Data
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
        return JSON.parse(lists);

    } else {
        return [];
    }
};
const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setisEdititem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    //Add items
    const addItem = () => {
        if (!inputdata) {
            alert("plz fill some data");
        }
        else if (inputdata && toggleButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        return { ...curElem, name: inputdata };
                    }
                    return curElem;
                })
            );
            setInputData("");
            setisEdititem(null);
            setToggleButton(false);
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    };
    //Edit the items
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        });
        setInputData(item_todo_edited.name);
        setisEdititem(index);
        setToggleButton(true);
    };
    // how to delete iteam
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== index;
        });
        setItems(updatedItems);
    };
    const removeAll = () => {
        setItems([]);
    };
    //Local Sotorage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))
    }, [items]);
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" className="form-control" placeholder="✍ Add Items"
                            value={inputdata} onChange={(event) => setInputData(event.target.value)} />
                        {toggleButton ? (
                            <i className="far fa-edit add-btn" onClick={addItem}></i>
                        ) :
                            (
                                <i class="fa fa-plus-square add-btn " onClick={addItem}></i>
                            )}
                    </div>
                    {/* show our items */}
                    <div className="showItems">
                        {
                            items.map((curElem) => {
                                return (
                                    <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">
                                            <i class="far fa-edit " onClick={() => editItem(curElem.id)}></i>
                                            <i class="far fa-trash-alt" onClick={() => deleteItem(curElem.id)}></i>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>
                    {/* remove all bottons */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>Check List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
