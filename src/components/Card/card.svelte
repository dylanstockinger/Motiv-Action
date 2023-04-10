
<script>
import TiHeart from 'svelte-icons/ti/TiHeart.svelte'
</script>




    <section>

          <div class="card-details">
             <p>
                "Don't let the bastards grind you down."
             </p>
             <div class="icon">
             <TiHeart></TiHeart>
            </div>
      </div>
    </section>
 


<style>


    section {


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
.icon{
    position: absolute;
    top: 160px;
    right: 440px;
    width:55px;
    color: #056348;
    cursor: pointer;
    margin: 10px;
}
.icon:hover{
    color: #109871;
}
    p{
        font-size: 2rem;

    }
   


   
  

   
  
    

</style>