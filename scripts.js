var string = '{"status":"success","chapter":{"book_id":7,"chapter_id":329,"short_name":"connectivism","title":"Connectivism","subtitle":"A Learning Theory for the Digital Age","cardinality":6,"text":null,"text_processed":null,"last_updated":"2021-05-02 17:24:26","page_views":9200,"pdf_downloads":1669,"published":1,"chapter_level":"1","order_number":"1.2","title_numbered":"1.2. Connectivism","altmetrics":{"chapter_id":329,"book_id":7,"flight_id":0,"total_ratings":122,"avg_rating":4,"reading_level":10.6,"reading_difficulty":40.4,"word_count":3469,"reading_minutes":16.5,"page_views_tracked":9656,"predicted_reads":1111,"cost_savings":1829,"video_views":null,"video_view_time":null}},"type":"chapter"}'

var Obj = JSON.parse(string);

console.log(Obj.chapter.book_id);

function demo(){
    document.getElementById('views').innerHTML = Obj.chapter.page_views;
    document.getElementById('edit').innerHTML = Obj.chapter.last_updated;
    document.getElementById('pdf').innerHTML = Obj.chapter.pdf_downloads +' downloads';
} 

function submitMe() {
    // book1 = document.getElementById("book").value;
    // chapter1 = document.getElementById("chapter").value;
    // console.log (book1);
    // urlrequest1 = 'https://edtechbooks.org/api.php?book=' + book1 + '&chapter=' + chapter1 + '&action=analytics';
    
    urlrequest1= 'https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics'

    console.log (urlrequest1);

    // let response = fetch(urlrequest1);
    //console.log(response);

    fetch('https://edtechbooks.org/api.php?book=k12handbook&chapter=connectivism&action=analytics')
        .then((response) => response.json())
        .then((data) => console.log(data));

    
}

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors