
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';


class parents extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            food_visible: true,
            message_visible: false,
            upcomming_visible: false,
            vaccine_visible:false
        }

    }
    

   
    showIncomming() {
        this.setState({ message_visible: false });
        this.setState({ food_visible: false });
        this.setState({ upcomming_visible: false });
        this.setState({ vaccine_visible: false });

        this.setState({ upcomming_visible: true });
    }
    showMessage() {
        this.setState({ message_visible: false });
        this.setState({ food_visible: false });
        this.setState({ vaccine_visible: false });
        this.setState({ upcomming_visible: false });

        this.setState({ message_visible: true });
    }
    showFood() {
        this.setState({ message_visible: false });
        this.setState({ food_visible: false });
        this.setState({ vaccine_visible: false });
        this.setState({ upcomming_visible: false });

        this.setState({ food_visible: true });
    }
    showVaccine() {
        this.setState({ message_visible: false });
        this.setState({ food_visible: false });
        this.setState({ vaccine_visible: false });
        this.setState({ upcomming_visible: false });

        this.setState({ vaccine_visible: true });
    }
    componentDidMount() {
        if (sessionStorage.length == 0) {
            window.open("/", "_self");
        }
        document.getElementById("jojo_sign_in").style.display = "none";
        document.getElementById("profileUI").style.display = "block";
        document.getElementById("username_Jojo_general").innerHTML = "" + sessionStorage.getItem("username");
        document.getElementById("logout").style.display = "inline";
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          });
        }


        document.getElementById("activitypage").style.display = "inline";
        document.getElementById("activitypage").href = "/parents";
    }
    w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }



    render() {
        return (

            <div style={{ background: '#2c3e50', color: '#FFF'}}>
                <div>
                    <div className="w3-sidebar w3-bar-block w3-dark-grey w3-animate-left" style={{ display: "none" }} id="mySidebar">
                        <button className="w3-bar-item w3-button w3-large"
                            onClick={this.w3_close.bind(this)}>Close &times;</button>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showIncomming.bind(this)}>IBIKORWA BITEGANIJWE KUBA</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showFood.bind(this)}>AMAKURU Y'AMAFUNGURO UMWANA YAFATA</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showMessage.bind(this)}>UBUTUMWA</a>
                        <a href="#" className="w3-bar-item w3-button" onClick={this.showVaccine.bind(this)}>INKINGO ZAFASHWE NIMYAKA Y'UMWANA</a>
                    </div>

                    <div>
                        <button style={{ width: "100px" }} className="w3-button w3-white w3-xxlarge" onClick={this.w3_open.bind(this)}>&#9776;</button>

                        <div className="center-block" style={{ margin: "0px 300px 0px 300px" }} >

                            <div className="container" style={{ width: "100%", color: "black" }}>
                                <div className={this.state.message_visible ? "message" : "message_invisible"}>
                                    <h2>UBUTUMWA</h2>
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><div style={{ width: "200px", height: "400px", overflow: "scroll" }}>
                                                        <div style={{ borderBottom: "1px solid black" }}>
                                                            <h6>Kanakuze Dativa</h6>
                                                        </div>
                                                    </div></td>
                                                    <td>
                                                        <div style={{ width: "400px", height: "400px" }}>
                                                            <div style={{ height: "300px", overflow: "scroll" }}>
                                                                <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>sfs9fs fsfo9hsfbsf sfohsb fsnfb sfsfbs sfn9  </div>
                                                                <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>sfs9fs fsfo9hsfbsf sfohsb fsnfb sfsfbs sfn9  </div>
                                                                <div style={{ float: "right", width: "60%", borderBottom: "1px solid red" }}>sfs9fs fsfo9hsfbsf sfohsb fsnfb sfsfbs sfn9  </div>
                                                                <div style={{ float: "left", width: "60%", borderBottom: "1px solid red" }}>sfs9fs fsfo9hsfbsf sfohsb fsnfb sfsfbs sfn9  </div>

                                                            </div>
                                                            <div>
                                                                <table>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><textarea className="form-control" style={{ width: "250px", height: "80px" }}></textarea></td>
                                                                            <td><button className="btn-success" style={{ width: "120px", height: "40px" }}>Send</button></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className={this.state.food_visible ? "food" : "food_invisible"}>
                                    <h4>AMAKURU YAMAFUNGURO</h4>
                                    <div style={{ height: "600px", overflow: "scroll" }}>
                                    <h6 style={{color:"blue"}}>AMAKURU KUBIRYO WAGABURIRA UMWANA NUKO WABITEGURA</h6>
                                    
<button className="accordion">1DAY - 3WEEKS</button>
<div className="panel">
<div style={{ height: "200px", overflow: "scroll" }}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <button className="btn btn-success" style={{ width: "200px", height: "40px" ,marginLeft:"400px",marginBottom:"50px"}}> UKO WABITEGURA</button>
</div>
</div>

<button className="accordion">3WEEKS - 2MOUTHS</button>
<div className="panel">
<div style={{ height: "200px", overflow: "scroll" }}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <button className="btn btn-success" style={{ width: "200px", height: "40px",marginLeft:"400px",marginBottom:"50px" }}> UKO WABITEGURAE</button>
</div>
</div>

<button className="accordion">2MOUTHS-6MOUTHS</button>
<div className="panel">
<div style={{ height: "200px", overflow: "scroll" }}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <button className="btn btn-success" style={{ width: "200px", height: "40px",marginLeft:"400px" ,marginBottom:"50px"}}> UKO WABITEGURA</button>
</div>
</div>
<button className="accordion">Umwana hagati y’amezi 6 na 8</button>
<div className="panel">
<div style={{ height: "200px", overflow: "scroll" }}>
<h4><strong style={{color:"green"}}>IBYO YASHOBORA GUFATA</strong></h4>
<div><strong>Ibinyampeke : </strong>Umuceri, ingano cyangwa ibibikomokaho</div>
<div><strong>Imbuto :</strong> Avoka, imineke, ibinyomoro, apricots na prunes</div>
<div><strong>Imboga :</strong> Karoti, epinari, urunyogwe, ibitonore</div>
<div><strong>Proteines :</strong> inyama y’inkoko, tofu</div>
<div><strong>Ibiva ku mata : </strong>yogourt ikoze mu mata yuzuye.</div>

<h4><strong style={{color:"green"}}>UKO BITEGURWA</strong></h4>
<div>•	Ibi byose umwana abihabwa biseye. Ndetse umuceri n’ingano bishobora gukorwamo igikoma,
     ari nacyo cyiza kuri uyu mwana kurenza ibindi bikoma byose wamuha.</div>
<div>•	Ibiryo by’uyu mwana ntibikarangwa ndetse n’umunyu ushyiramo gacye cyane bishoboka.</div>
<div>•	Kuko uyu mwana ariho aba agitangira kurya, si byiza guhita umuha ibintu byinshi kuko bishobora gutuma yanga ibere. 
    Ikindi jya umuha ubwoko bumwe ukwabwo, kugeza igihe umenyeye icyo akunda kurenza ibindi, cyangwa igitera umubiri we ubwivumbure.</div>
</div>
</div>
<button className="accordion">Umwana hagati y’amezi 8 na 10</button>
<div className="panel">
<div style={{ height: "500px", overflow: "scroll" }}>
<h4><strong style={{color:"green"}}>IBYO YASHOBORA GUFATA</strong></h4>
<div><strong>•	Ibinyampeke :</strong> Umuceri, ingano, ibibikomokaho, amasaka</div>
<div><strong>•	Imbuto : </strong>avoka, imineke, ibinyomoro, apricots,icunga, prunes, watermelon, ipapayi, inkeri</div>
<div><strong>•	Imboga : </strong>karoti, poivron, epinari, urunyogwe, ibitonore, intoryi, ibibiringanya, igitunguru, amashu, ibirayi, ibihumyo</div>
<div><strong>•	Poroteyine : </strong>Inyama y’inkoko, umuhondo w’igi, inyama y’inka</div>
<div><strong>•	Ibiva ku mata :</strong> Yogourt, fromage</div>
<strong>ICYITONDERWA:</strong> Ibi biryo urabisya, gusa uko agenda amera amenyo, imbuto zoroshye ushobora kumuha akifatira akaba yanyunyuza nk’ikinyomoro. Tangira umumenyereze kwitamika kandi, amenye uko bafata ikiyiko.
<strong>URUGERO: Inombe y’ibirayi, urunyogwe na karoti</strong>
<div><img src="images/10.jpg"  style={{width:"100px", height:"100px"}}/></div>
<p>Iyi ni indyo yuzuye ishobora kugaburirwa umwana kuva ku mezi umunani.<br/>
 Muri iyi ndyo, harimo intungamubiri nka proteines, beta-carotenes, imyunyungugu nka fer fibres, n’izindi zitandukanye.</p>
<h6 style={{fontWeight:"bold",color:"blue"}}> Ibikenewe</h6>
<ol>
<li>Agakombe k’amashaza atonoye (yavuyeho igishishwa cy’inyuma)<span><img src="images/1.jpg" style={{width:"50px", height:"50px"}} /></span></li>
<li>Ibirayi 2 biringaniye, bihase kandi bikasemo uduce <span><img src="images/2.jpg" style={{width:"50px", height:"50px"}} /></span></li>
<li>Karoti 2 ziringaniye ziharuye zikasemo n’uduce<span><img src="images/3.jpg" style={{width:"50px", height:"50px"}} /></span></li>
<li>½ cy’igitunguru gikase<span><img src="images/4.jpg" style={{width:"50px", height:"50px"}} /></span></li>
<li>Ibiyiko 2 by’amavuta ya Olive ataratetswemo ibindi bintu<span><img src="images/5.jpg" style={{width:"50px", height:"50px"}} /></span></li>
<li>Ikiyiko cy’umutobe w’indimu<span><img src="images/6.png"  style={{width:"50px", height:"50px"}}/></span></li>
</ol>
<h4><strong style={{color:"green"}}>UKO BITEGURWA</strong></h4>
<div>
    <p><strong>step1:</strong>Ufata amashaza ukayatumbika mu mazi igihe kinini, ukayakuramo ugashyira mu yandi mazi,
     yamara kuvaho ibishishwa ukayatogosa ku ruhande, hanyuma ukayashyira mu kuma gasya.
      (umuntu ashobora kwifashisha paswari mu gihe nta kabugenewe afite).</p>

      <p><strong>step2:</strong>Biza amazi mu gasafuriya ku ruhande, hanyuma ushyiremo bya birayi bikase, wongeremo za karoti <span><img src="images/7.jpg" style={{width:"50px", height:"50px"}} /></span>
 ubirekere ku muriro mukeya mu gihe cy’iminota 30 kugeza kuri 40.<span><img src="images/8.jpg" style={{width:"50px", height:"50px"}} /></span></p>

 <p><strong>step3:</strong>Fata wa munyigi w’amashaza, uvange na bya birayi na karoti bihiye wakuye ku muriro bikirimo n’amazi wabitekesheje,
 ongeramo ibiyiko 2 by’amavuta ya Olive, hanyuma ubinyuze muri mixeur <span><img src="images/9.jpg" style={{width:"50px", height:"50px"}} /></span> 
 cyangwa se ikindi kintu wifashisha mu gusya ibiribwa, kugeza igihe uboneye inombe yoroshye kandi ivanze neza.<span><img src="images/10.jpg" style={{width:"60px", height:"60px"}} /></span>
 </p></div>
</div>
</div>
<button className="accordion">Umwana hagati y’amezi 10 na 12</button>
<div className="panel">
<div style={{ height: "200px", overflow: "scroll" }}>
<h4><strong style={{color:"green"}}>IBYO YASHOBORA GUFATA</strong></h4>
<div>Uyu mwana ifunguro ryose abantu bakuru bashobora gufungura ariko ridakomeye cyane yemerewe kuriryaho.</div>
<div style={{color:"red"}}> Ibyo waba uretse kumuha ni imyumbati, umutsima w’ibigori, n’igi ryose.<strong>Igi</strong> ukomeza kumuha umuhondo waryo kugeza umwaka wuzuye. 
<div style={{color:"red"}}><strong>Indimu, n’ibindi birimo acide ntarabyemererwa ataruzuza umwaka.</strong></div>
 <strong>Ibyo kurya bye urabinomba ariko ntibyorohe cyane kuko aba atangiye kumenya guhekenya.</strong>
<h5><strong>ICYITONDERWA:</strong></h5>
<p>Iyo amezi 12 yuzuye aba yemerewe kunywa amata yonyine, adafunguye cyangwa atavanzwemo ikindi kintu.
 Gusa mbere yuko ukaranga ibyo kurya ukuraho ibye, ugatonyangirizamo utuvuta ducye cyane.</p>
</div>
</div></div>
<button className="accordion">1YEAR - HALF-2YEARS</button>
<div className="panel">
<div style={{ height: "200px", overflow: "scroll" }}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <button className="btn btn-success" style={{ width: "200px", height: "40px",marginLeft:"400px" ,marginBottom:"50px"}}> UKO WABITEGURA</button>
</div>
</div>
<button className="accordion">2YEARS - 2YEARS AND HALF</button>
<div className="panel">
<div style={{ height: "200px", overflow: "scroll" }}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <button className="btn btn-success" style={{ width: "200px", height: "40px",marginLeft:"400px",marginBottom:"50px" }}> UKO WABITEGURA</button>
</div>
</div>
<button className="accordion">2YEARS AND HALF - 3YEARS</button>
<div className="panel">
<div style={{ height: "200px", overflow: "scroll" }}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <button className="btn btn-success" style={{ width: "200px", height: "40px",marginLeft:"400px",marginBottom:"50px" }}> UKO WABITEGURA</button>
</div>
</div>
 </div>
                                </div>
                                <div className={this.state.upcomming_visible ? "upcomming" : "upcomming_invisible"}>
                                    <h4>IBIKORWA IBITEGANIJWE KUBA</h4>
                                    <div style={{ height: "600px", overflow: "scroll" }}>
                                        <h5>minisante</h5>
                                        <div>Hari igikorwa cyo gukingira abana kuri uyu wa<span>12/02/18</span></div>
                                        <h5>Health center</h5>
                                        <div>Ejo kuri <span>12/02/18</span>hari igikorwa cyo gukingira kuri health center ya kacyiru</div>
                                    </div>
                                </div>
                                <div className={this.state.vaccine_visible ? "vaccine" : "vaccine_invisible"}>
                                    <h4>Inkingo Umwana yafashe nimyaka afite</h4>
                                    <div style={{ height: "400px", overflow: "scroll" }}>
                                        
                                        <div><div class="container">

  <h6>Menya ibyerekeye inkingo w'emeza izo Umwana wawe yamaze gufata</h6>
  <form>
    <label className="checkbox-inline">
      <input type="checkbox"  />BCG (Baccille Calmette Guérin vaccine): Uru rukingo ruhabwa umwana ukivuka rukaba rumukingira igituntu n’imbasa
    </label>
    <label className="checkbox-inline">
    <input type="checkbox"  />Poliomyélite I (afite ukwezi 1 n’igice): Umwana aba akingiwe: Imbasa, kokorishi, agakwega (tetanosi), akaniga, Hib, Hepatite B, Pinemokoke
  </label>
  <label className="checkbox-inline">
  <input type="checkbox"  />Pentavalent I (Afite amezi 2 n’igice): Aha na none umwana aba akingiwe, Imbasa, kokorishi, agakwega (tetanosi), akaniga, Hib, Hepatite B, Pinemokoke
</label>
<label className="checkbox-inline">
  <input type="checkbox"  />Pneumocoque (afite amezi 3 n’igice): Umwana uhawe uru rukingo aba akingiwe: Imbasa, kokorishi, agakwega (tetanosi), akaniga, Hib, Hepatite B, Pinemokoke.
</label>
<label className="checkbox-inline">
  <input type="checkbox"  />VAR cyangwa Rougeole (afite amezi 9): Uru rukingo rukaba rukingira umwana ISERU.
</label>
  </form>
 <h3> <strong>ICYITONDERWA:</strong>uwana wese agomba gufata izi nkingo zose uko zavuzwe hejuru</h3>
</div>
<div>
    <h4>Hitamo imyaka y'Umwana</h4>
<form>
  Itariki Yavukiyeho: <input type="date" />

</form>
</div>
</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default parents;
