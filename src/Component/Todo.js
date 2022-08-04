import React, { useState } from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [items, SetItems] = useState([])
    const [toggleSubmit, setToggleSubmit] = useState('true')
    const [isEditItem, setIsEditITem] = useState('null')

    //add the items

    const addItems = () => {
        if (!inputData) {
            alert('please Add some Items Here')
        } else if (inputData && !toggleSubmit) {
            SetItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setInputData('');

            setToggleSubmit(true);

            setIsEditITem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            SetItems([...items, allInputData]);
            setInputData('')
        }
    }

    //delete the item

    const deleteItem = (index) => {
        const updateItems = items.filter((elem) => {
            return (index !== elem.id)
        })
        SetItems(updateItems)
    }

    //remove all 
    const removeAll = () => {
        SetItems([])
    }

    const editItem = (id) => {
        let newEditITem = items.find((elem) => {
            return elem.id === id
        })
        setInputData(newEditITem.name)
        setToggleSubmit(false);
        setIsEditITem(id)
    }
    return (
        <>
            <div>
                <div>
                    <figure>
                        <figcaption><span>Add Your List Here</span></figcaption>
                    </figure>
                    <div><input type="text" placeholder='Add Items'
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)} />

                        {
                            toggleSubmit ? <input type="button" value="Submit" title='Update Items' onClick={addItems} /> :
                                <input type="button" value="Submit" title='Add Items' onClick={addItems} />

                        }

                    </div>
                    <div>
                        {
                            items.map((elem) => {
                                return (
                                    <div key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <input type="button" value="Update" title='Edit Items' onClick={() => editItem(elem.id)} />
                                        <input type="button" value="Delete" title='Remove Items' onClick={() => deleteItem(elem.id)} />
                                    </div>

                                )
                            })
                        }

                    </div>
                    <div>
                        <button type="submit" value='Remove All' onClick={removeAll}><span>Remove All</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo