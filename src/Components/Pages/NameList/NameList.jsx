import React, { useState, useEffect } from 'react';
import NameListItem from './NameListItem';

function NameList() {
  const [loadData, setLoadData] = useState(new Date());
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: {
        title: 'mr',
        first: 'Brad',
        last: 'Gibson',
      },
      location: {
        city: 'kilcoole',
      },
      email: 'brad.gibson@example.com',
      dob: {
        date: '1993-07-20T09:44:18.674Z',
        age: 26,
      },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
      },
    },
  ]);

  // API Calling
  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNameList((nameList) => [responseData.results[0]]);
      });
  }, [loadData]);

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
          key={aName.id}
          name={`${aName.name.first} ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    setLoadData(new Date());
  };

  /* const addUserHandler = () => {
    const newUser = {
      id: new Date(),
      name: {
        title: 'Mr',
        first: 'Jack',
        last: 'Hawkins',
      },
      location: {
        city: 'London',
      },
      email: 'jack@gmail.com',
      dob: {
        date: '1993-01-09T20:08:43.151Z',
        age: 28,
      },
      picture: {
        medium: 'https://randomuser.me/api/portraits/med/men/19.jpg',
      },
    };

    //setNameList((nameList) => nameList.concat(newUser));

    //Spread Operator
    setNameList((nameList) => [...nameList, newUser]);
  }; 
  */

  return (
    <React.Fragment>
      <div className="container mt-5">
        <button className="btn btn-primary mb-3" onClick={addUserHandler}>
          Generate Name
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}

export default NameList;
