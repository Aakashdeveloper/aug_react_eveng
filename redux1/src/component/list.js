import React from 'react';

const List = (props) => {

    const renderlist = ({movlist}) => {
        if(movlist){
            return movlist.map((item) => {
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            {renderlist(props)}
        </div>
    )
}

export default List;