import room000 from '../images/clean/1_Floor.png';
import room001 from '../images/Level0/001.png';
import room002 from '../images/Level0/002.png';
import room003 from '../images/Level0/003.png';
import room004 from '../images/Level0/004.png';
import room005 from '../images/Level0/005.png';
import room006 from '../images/Level0/006.png';
import room007 from '../images/Level0/007.png';
import room008 from '../images/Level0/008.png';
import room100 from '../images/Level1/0_Floor_to_Stairs.png';
import room101 from '../images/Level1/101.png';
import room102 from '../images/Level1/102.png';
import room103 from '../images/Level1/103.png';
import room104 from '../images/Level1/104.png';
import room105 from '../images/Level1/105.png';
import room106 from '../images/Level1/106.png';
import room107 from '../images/Level1/107.png';
import room108 from '../images/Level1/108.png';
import room109 from '../images/Level1/109.png';
import room110 from '../images/Level1/110.png';
import room111 from '../images/Level1/111.png';
import room112 from '../images/Level1/112.png';
import room113 from '../images/Level1/113.png';
import room114 from '../images/Level1/114.png';
import room115 from '../images/Level1/115.png';
import room116 from '../images/Level1/116.png';
import room200 from '../images/Level2/0_Floor_to_Stairs.png';
import room201 from '../images/Level2/201.png';
import room202 from '../images/Level2/202.png';
import room203 from '../images/Level2/203.png';
import room204 from '../images/Level2/204.png';
import room205 from '../images/Level2/205.png';
import room206 from '../images/Level2/206.png';
import room207 from '../images/Level2/207.png';
import room208 from '../images/Level2/208.png';
import room209 from '../images/Level2/209.png';
import room210 from '../images/Level2/210.png';
import room211 from '../images/Level2/211.png';
import room212 from '../images/Level2/212.png';
import room213 from '../images/Level2/213.png';
import room214 from '../images/Level2/214.png';
import room215 from '../images/Level2/215.png';
import room216 from '../images/Level2/216.png';

export default function ShowRoutes({roomnumber}) {
    if (roomnumber >= 200) {
        switch(roomnumber) {
            case 216:
                return(<img src={room216} />)
            case 215:
                return(<img src={room215} />)
            case 214:
                return(<img src={room214} />)
            case 213:
                return(<img src={room213} />)
            case 212:
                return(<img src={room212} />)
            case 211:
                return(<img src={room211} />)
            case 210:
                return(<img src={room210} />)
            case 209:
                return(<img src={room209} />)
            case 208:
                return(<img src={room208} />)
            case 207:
                return(<img src={room207} />)
            case 206:
                return(<img src={room206} />)
            case 205:
                return(<img src={room205} />)
            case 204:
                return(<img src={room204} />)
            case 203:
                return(<img src={room203} />)
            case 202:
                return(<img src={room202} />)
            case 201:
                return(<img src={room201} />)
            default:
                return(<img src={room200} />)
        }
    } else if(roomnumber >= 100) {
        switch(roomnumber) {
            case 116:
                return(<img src={room116} />)
            case 115:
                return(<img src={room115} />)
            case 114:
                return(<img src={room114} />)
            case 113:
                return(<img src={room113} />)
            case 112:
                return(<img src={room112} />)
            case 111:
                return(<img src={room111} />)
            case 110:
                return(<img src={room110} />)
            case 109:
                return(<img src={room109} />)
            case 108:
                return(<img src={room108} />)
            case 107:
                return(<img src={room107} />)
            case 106:
                return(<img src={room106} />)
            case 105:
                return(<img src={room105} />)
            case 104:
                return(<img src={room104} />)
            case 103:
                return(<img src={room103} />)
            case 102:
                return(<img src={room102} />)
            case 101:
                return(<img src={room101} />)
            case 100:
                return(<img src={room100} />)
            default:
                return(<img src={room000} />)
        }
    } else {
        switch(roomnumber) {
            case 8:
                return(<img src={room008} />)
            case 7:
                return(<img src={room007} />)
            case 6:
                return(<img src={room006} />)
            case 5:
                return(<img src={room005} />)
            case 4:
                return(<img src={room004} />)
            case 3:
                return(<img src={room003} />)
            case 2:
                return(<img src={room002} />)
            case 1:
                return(<img src={room001} />)
            default:
                return(<img src={room000} />)
        }
    }
}
