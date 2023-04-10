
<script>
import TiHeart from 'svelte-icons/ti/TiHeart.svelte'
</script>




    <div class="card-container">

          <div class="card-details">
            <div class="icon">
                <TiHeart></TiHeart>
               </div>
             <p>
                "Don't let the bastards grind you down."
             </p>
            
            <div class="call-to-action">
        
                <a href="/citations"><button>Let's discover the other citations !</button></a>  
          
                </div>
           
          
      </div>
      
</div>


<style>


    .card-container {
    position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      color: #000000;
      height: 240px;
      width: 800px;
      border-radius: 10px;
      background-color: #fff;
      margin-top: 100px;


    }

    .card-details{

    }
.icon{
    position: absolute;
    top: 0px;
    right: 1px;
    width:55px;
    color: #056348;
    cursor: pointer;
    margin: 20px;

}
.icon:hover{
    color: #109871;
}
    p{
        font-size: 2rem;

    }
   


   
  

   .call-to-action {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    cursor: pointer;

   }
   .call-to-action button {
    cursor: pointer;
    border: none;
    width: 300px;
    height: 50px;
    background-color: #ffffff;
    color: black;
    font-size: 1rem;
    border: solid black;
    border-radius: 10px;

   }

   .call-to-action button:hover{
    background-color: #dadada;

   }
  
    

</style>