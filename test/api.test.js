require('jest-fetch-mock').enableMocks();

describe('testing the api', () => {
    // beforeEach(() => {
    //     fetch.resetMocks()
    // });

    it("should be the product array", () => {
        // fetch.mockResponseOnce(JSON.stringify({ products: data.items }, { status: 200 }));
        
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                expect(res.products).toBeArray();
            })
            .catch(err => {
            });
            
        // expect(fetch.mock.calls.length).toEqual(1);
    });

    it("should be the product array with the size of 5", () => {        
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                expect(res.products).toBeArrayOfSize(5);
            })
            .catch(err => {
            });
    });
        

    it("posts data and returns ok equal true", () => {        
        fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                expect(res.ok).toBeTrue();
            })
            .catch(err => {
            });
    });
});