var top_search=document.querySelector(".top_search");
var address_con=document.querySelector(".address_con")
document.onscroll=function(){
	if(document.body.scrollTop<400){
		top_search.style=" ";
		address_con.style=" ";
	
	}
	else if(document.body.scrollTop>400){
		var search_left_word=document.querySelector(".search_left_word");
		var a=search_left_word.querySelector(".search_left_word>a:nth-child(2)")
	top_search.style.position="fixed";
	top_search.style.backgroundColor="#4c558a";
	address_con.style.display="none";
	top_search.style.top="0";
	top_search.style.left="13.5%";	
	// search_left_word.replaceChild(a,span)
	}
}