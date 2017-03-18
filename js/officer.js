initializeGrid1();

function initializeGrid1() {
            $("#grid1").shieldGrid({
                dataSource: {
                    data: gridData
                },
                sorting: {
                    multiple: false
                },
                paging: {
                    pageSize: 8,
                    pageLinksCount: 10
                },
                selection: {
                    type: "row",
                    multiple: true,
                    toggle: false
                },
                columns: [
                    { field: "id", title: "ID" },
                    { field: "name", title: "Person Name" },
                    { field: "company", title: "Company Name" },
                    { field: "email", title: "Email Address" }
                ]
            });
        }

var gridData =
[
    {
        "id": 0,
        "guid": "56e05974-4184-47c6-b035-a7139ea80a5f",
        "isActive": false,
        "balance": 2013,
        "picture": "//placehold.it/32x32",
        "age": 39,
        "name": "Sue Sharpe",
        "gender": "female",
        "company": "Mitroc",
        "email": "suesharpe@mitroc.com",
        "phone": "+1 (951) 414-3324",
        "address": "933 Herkimer Court, Greensburg, Iowa, 2881",
        "registered": "1990-11-05T03:51:02 -02:00",
        "latitude": -42.444761,
        "longitude": 125.590428,
        "tags": [
            "qui",
            "qui",
            "fugiat",
            "anim",
            "sunt",
            "reprehenderit",
            "non"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Monique Henson"
            },
            {
                "id": 1,
                "name": "Mallory Fleming"
            },
            {
                "id": 2,
                "name": "Madeline Romero"
            },
            {
                "id": 3,
                "name": "Patsy Cortez"
            },
            {
                "id": 4,
                "name": "Verna Miles"
            },
            {
                "id": 5,
                "name": "Theresa Mosley"
            },
            {
                "id": 6,
                "name": "Georgia Hooper"
            }
        ]
    },
    {
        "id": 1,
        "guid": "757ba20d-c025-4303-89e5-955fb4be4361",
        "isActive": true,
        "balance": 1363,
        "picture": "//placehold.it/32x32",
        "age": 34,
        "name": "Nieves Hubbard",
        "gender": "male",
        "company": "Syntac",
        "email": "nieveshubbard@syntac.com",
        "phone": "+1 (947) 476-2875",
        "address": "388 Oxford Street, Englevale, Connecticut, 4945",
        "registered": "2012-09-26T07:10:49 -03:00",
        "latitude": -86.998205,
        "longitude": 120.74761,
        "tags": [
            "consequat",
            "nisi",
            "quis",
            "aliquip",
            "proident",
            "reprehenderit",
            "voluptate"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Ophelia Spears"
            },
            {
                "id": 1,
                "name": "Padilla Trujillo"
            },
            {
                "id": 2,
                "name": "Adkins Wiley"
            },
            {
                "id": 3,
                "name": "Jenifer Lawson"
            },
            {
                "id": 4,
                "name": "Gardner Chase"
            },
            {
                "id": 5,
                "name": "Johnnie Bond"
            },
            {
                "id": 6,
                "name": "Mcdaniel Wells"
            }
        ]
    }
]