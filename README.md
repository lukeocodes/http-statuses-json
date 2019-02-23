# JSON HTTP Status Codes

A static JSON data set for HTTP Status Codes, build using the markdown content from [httpstatuses.com][2].

## Contributing

To test locally you need nodejs and to run `npm install` to pull in dependencies and then `npm start`. The application is will be locally available at [localhost:3000][3].

If you find any issues please raise a PR or [create an issue][1].

Each status built code lives in a JSON file at [public/](public). These files are built using `npm build` which looks in the [data/](data) directory for copies of the markdown files of [httpstatuses.com][2].

[1]: <https://github.com/lukeocodes/http-statuses-json/issues>
[2]: <https://httpstatuses.com>
[3]: <http://localhost:3000>