import { useEffect, useRef, useState } from 'react';

const API_URL = 'https://randomuser.me/api/?results=20';

type SortDirection = 'asc' | 'desc';

const UsersTable = () => {
  const [state, setState] = useState([]);
  const sortRef = useRef<SortDirection>();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const { results } = await response.json();

      const flat = (item: any) => {
        const result = {};

        const solve = (node: any, prevKey?: string) => {
          for (let key in node) {
            const newKey = prevKey ? prevKey + '.' + key : key;

            if (typeof node[key] === 'object' && node[key] !== null) {
              solve(node[key], newKey);
            } else {
              result[newKey] = node[key];
            }
          }
        };

        solve(item);

        return result;
      };

      // const flat = (item: any) => {
      //   const result = {};

      //   const solve = (node: any) => {
      //     let result = '';

      //     for (let key in node) {
      //       if (typeof node[key] === 'object' && node[key] !== null) {
      //         result += solve(node[key]);
      //       } else {
      //         result += node[key] + '/';
      //       }
      //     }

      //     return result;
      //   };

      //   for (let key in item) {
      //     if (typeof item[key] === 'object' && item[key] !== null) {
      //       result[key] = solve(item[key]);
      //     } else {
      //       result[key] = item[key];
      //     }
      //   }

      //   return result;
      // };

      setState(results);
      setLocations(results.map(({ location }) => flat(location)));
    };

    fetchData();
  }, []);

  const handleSort = (event: any): void => {
    const field = event.target.innerText.toLowerCase();

    if (sortRef.current && sortRef.current === 'asc') {
      sortRef.current = 'desc';

      return setLocations((prev) =>
        prev.toSorted((a, b) => {
          if (a[field] > b[field]) {
            return -1;
          }

          if (a[field] < b[field]) {
            return 1;
          }

          return 0;
        }),
      );
    }

    sortRef.current = 'asc';

    return setLocations((prev) =>
      prev.toSorted((a, b) => {
        if (a[field] < b[field]) {
          return -1;
        }

        if (a[field] > b[field]) {
          return 1;
        }

        return 0;
      }),
    );
  };

  return (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ fontWeight: 900 }}>
            <td onClick={handleSort} style={{ cursor: 'pointer' }}>
              City
            </td>
            <td onClick={handleSort} style={{ cursor: 'pointer' }}>
              Country
            </td>
            <td onClick={handleSort} style={{ cursor: 'pointer' }}>
              Postcode
            </td>
          </tr>
        </thead>
        <tbody>
          {locations.map((item, index) => {
            return (
              <tr key={item['coordinates.latitude'] + item['coordinates.longitude']}>
                <td>{item.city}</td>
                <td>{item.country}</td>
                <td>{item.postcode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
