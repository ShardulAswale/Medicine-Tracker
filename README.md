# Medicine Tracker

React and Material UI interface for recording medication schedules and daily tracking counters.

## How it works

The interface allows medicine names and morning, afternoon and night flags to be edited, marks doses as taken and stores the record in browser local storage. A save routine also attempts a request to a mock API at `http://127.0.0.1:3001/medicine`.

## Usage

Requires Node.js and npm. From the repository root:

```sh
npm install
npm run dev
```

Open the address printed by Vite. `npm run build` writes the static production files to `dist/`.

The frontend can maintain records in local storage. To exercise the mock-server save path, separately configure a JSON Server instance serving `db.json` on port 3001.

## Notes

`npm start` attempts to launch both servers, but `json-server` is not declared in the dependencies. The local mock-server address also needs configuration for deployed use.
