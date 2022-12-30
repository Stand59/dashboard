fetch('https://edtechbooks.org/api.php?action=search_books&offset=0&limit=200')
        .then((response) => response.json())
        .then((data1) => {
            bookInfo(data1);
            console.log(data1)
        })
    
var bookData= {}
function bookInfo (data1) {
    bookData = data1
}

console.log(bookData)

var string = '{"status":"success","chapter":{"book_id":7,"chapter_id":329,"short_name":"connectivism","title":"Connectivism","subtitle":"A Learning Theory for the Digital Age","cardinality":6,"text":null,"text_processed":null,"last_updated":"2021-05-02 17:24:26","page_views":9200,"pdf_downloads":1669,"published":1,"chapter_level":"1","order_number":"1.2","title_numbered":"1.2. Connectivism","altmetrics":{"chapter_id":329,"book_id":7,"flight_id":0,"total_ratings":122,"avg_rating":4,"reading_level":10.6,"reading_difficulty":40.4,"word_count":3469,"reading_minutes":16.5,"page_views_tracked":9656,"predicted_reads":1111,"cost_savings":1829,"video_views":null,"video_view_time":null}},"type":"chapter"}'

var Obj = JSON.parse(string);

console.log(Obj.chapter.book_id);
// use list of books i think: https://edtechbooks.org/api.php?action=search_books&author=royce
// https://edtechbooks.org/api.php?action=search_books&authors=maloy


function demo(){
    document.getElementById('views').innerHTML = Obj.chapter.page_views;
    document.getElementById('edit').innerHTML = Obj.chapter.last_updated;
    document.getElementById('pdf').innerHTML = Obj.chapter.pdf_downloads +' downloads';
} 
var a = {}
function submitMe() {
    book1 = document.getElementById("book").value;
    chapter1 = document.getElementById("chapter").value;
    urlrequest1 = 'https://edtechbooks.org/api.php?book=' + book1 + '&chapter=' + chapter1 + '&action=analytics';
    
    // use this https://dmitripavlutin.com/javascript-fetch-async-await/


    // let response = fetch(urlrequest1);
    // console.log(response);

// yes
    fetch(urlrequest1)
        .then((response) => response.json())
        .then((data) => {
            doStuff(data);
        })
    
    function doStuff(data) {
        a = data;

    }
    console.log (a);
    document.getElementById('views').innerHTML = a.chapter.page_views;
    document.getElementById('edit').innerHTML = a.chapter.last_updated;
    document.getElementById('pdf').innerHTML = a.chapter.pdf_downloads +' downloads';
}


    //     const response = fetch('https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics');
    //     const data = response.json();
    //     const words = data.map((dataPoint) => dataPoint.word);
    //     doStuff(words);

    // }

    // function doStuff() {
    //     console.log(words)
    // }

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/API/fetch