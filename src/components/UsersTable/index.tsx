import { useEffect, useRef, useState } from 'react';

const API_URL = 'https://randomuser.me/api/?results=20';

type SortDirection = 'asc' | 'desc';

type ResponseDTO = {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: 'female' | 'male';
  id: { name: string; value: string };
  location: {
    city: string;
    coordinates: { latitude: string; longitude: string };
    country: string;
    postcode: number;
    state: string;
    street: { number: number; name: string };
    timezone: { offset: string; description: string };
  };
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  name: { title: string; first: string; last: string };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: { date: string; age: number };
};

const UsersTable = () => {
  const sortRef = useRef<SortDirection>();
  const [locations, setLocations] = useState<Record<string, string | number>[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const { results } = (await response.json()) as { results: ResponseDTO[] };

      const flat = (item: ResponseDTO['location']) => {
        const result: Record<string, string | number> = {};

        const solve = (node: Record<string, string | number | object>, prevKey?: string) => {
          for (let key in node) {
            const newKey = prevKey ? prevKey + '.' + key : key;

            if (typeof node[key] === 'object' && node[key] !== null) {
              solve(node[key], newKey);
            } else {
              result[newKey] = node[key] as string | number;
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
