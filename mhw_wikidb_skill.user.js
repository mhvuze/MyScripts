// ==UserScript==
// @name         MH:World Skill Sim Translate
// @namespace
// @version      0.1.1
// @description  Replace japanese MH:World strings with English
// @author       MHVuze
// @match        http://mhw.wiki-db.com/sim/
// @grant        none
// @downloadURL  
// ==/UserScript==

replacements = {
	// Action system
	"運搬の達人" : "Pro Transporter",
	"回避距離UP" : "Evade Extender",
	"回避距離ＵＰ" : "Evade Extender",		// Alt
	"回避性能" : "Evade Window",
	"滑走強化" : "Affinity Sliding",
	"クライマー" : "Cliffhanger",
	"死中に活" : "Resuscitate",
	"しゃがみ移動速度UP" : "Speed Crawler",
	"しゃがみ移動速度ＵＰ" : "Speed Crawler",	// Alt
	"集中" : "Focus",
	"ジャンプ鉄人" : "Jump Master",
	"体術" : "Constitution",
	"砥石使用高速化" : "Speed Sharpening",
	"肉焼き名人" : "BBQ Master",
	"納刀術" : "Quick Sheath",
	"乗り名人" : "Master Mounter",
	"早食い" : "Speed Eating",
	"飛燕" : "Airborne",
	"ランナー" : "Marathon Runner",
	// Status system
	"回復速度" : "Recovery Speed",
	"火事場力" : "Heroics",
	"攻撃" : "Attack Boost",
	"渾身" : "Maximum Might",
	"瘴気耐性" : "Effluvia Resistance",
	"スタミナ急速回復" : "Stamina Surge",
	"体力回復量UP" : "Recovery UP",
	"体力回復量ＵＰ" : "Recovery UP",		// Alt
	"体力増強" : "Health Boost",
	"ひるみ軽減" : "Flinch Free",
	"フルチャージ" : "Peak Performance",
	"防御" : "Defense Boost",
	"防御力DOWN耐性" : "Iron Skin",
	"防御力ＤＯＷＮ耐性" : "Iron Skin",		// Alt
	// Monster combat system
	"威嚇" : "Intimidator",
	"雷耐性" : "Thunder Resistance",
	"気絶耐性" : "Stun Resistance",
	"氷耐性" : "Ice Resistance",
	"睡眠耐性" : "Sleep Resistance",
	"スタミナ奪取" : "Stamina Thief",
	"精霊の加護" : "Divine Blessing",
	"属性やられ耐性" : "Blight Resistance",
	"耐震" : "Tremor Resistance",
	"挑戦者" : "Agitator",
	"毒耐性" : "Poison Resistance",
	"泥耐性" : "Muck Resistance",
	"破壊王" : "Partbreaker",
	"爆破やられ耐性" : "Blast Resistance",
	"火耐性" : "Fire Resistance",
	"風圧耐性" : "Windproof",
	"不屈" : "Fortify",
	"ボマー" : "Bombardier",
	"麻痺耐性" : "Paralysis Resistance",
	"水耐性" : "Water Resistance",
	"耳栓" : "Earplugs",
	"龍耐性" : "Dragon Resistance",
	"裂傷耐性" : "Bleeding Resistance",
	// Weapon reinforcement system
	"雷属性攻撃強化" : "Thunder Attack",
	"貫通弾・竜の一矢強化" : "Piercing Shots",
	"ガード性能" : "Guard",
	"強化持続" : "Power Prolonger",
	"KO術" : "Slugger",
	"ＫＯ術" : "Slugger",		// Alt
	"氷属性攻撃強化" : "Ice Attack",
	"逆恨み" : "Resentment",
	"散弾・剛射強化" : "Spread/Power Shots",
	"弱点特効" : "Weakness Exploit",
	"睡眠属性強化" : "Sleep Attack",
	"属性解放/装填拡張" : "Free Elem/Ammo Up",
	"属性解放／装填拡張" :"Free Elem/Ammo Up",		// Alt
	"匠" : "Handicraft",
	"力の解放" : "Latent Power",
	"超会心" : "Critical Boost",
	"通常弾・通常矢強化" : "Normal Shots",
	"特殊射撃強化" : "Special Ammo Boost",
	"毒属性強化" : "Poison Attack",
	"爆破属性強化" : "Blast Attack",
	"抜刀術【技】" : "Critical Draw",
	"火属性攻撃強化" : "Fire Attack",
	"笛吹き名人" : "Horn Maestro",
	"砲撃手" : "Heavy Artillery",
	"砲術" : "Artillery",
	"砲弾装填数UP" : "Capacity Boost",
	"砲弾装填数ＵＰ" : "Capacity Boost",		// Alt
	"麻痺属性強化" : "Paralysis Attack",
	"見切り" : "Critical Eye",
	"水属性攻撃強化" : "Water Attack",
	"龍属性攻撃強化" : "Dragon Attack",
	// Field system
	"アイテム使用強化" : "Item Prolonger",
	"感知" : "Detector",
	"キノコ大好き" : "Mushroomancer",
	"研究者" : "Scholar",
	"広域化" : "Wide-Range",
	"こやし名人" : "Dungmaster",
	"昆虫標本の達人" : "Entomologist",
	"採集の達人" : "Master Gatherer",
	"瘴気環境適応" : "Effluvial Expert",
	"植生学" : "Botanist",
	"導蟲反応距離UP" : "Scoutfly Range Up",
	"導蟲反応距離ＵＰ" : "Scoutfly Range Up",		// Alt
	"スリンガー装填数UP" : "Slinger Capacity",
	"整備" : "Tool Specialist",
	"閃光強化" : "Blindsider",
	"潜伏" : "Stealth",
	"探索者の幸運" : "Forager\'s Luck",
	"地質学" : "Geologist",
	"追跡の達人" : "Scenthound",
	"釣り名人" : "Master Fisher",
	"飛び込み" : "Leap of Faith",
	"熱ダメージ無効" : "Heat Guard",
	"剥ぎ取り鉄人" : "Carving Pro",
	"ハニーハンター" : "Honey Hunter",
	"腹減り耐性" : "Hunger Resistance",
	"満足感" : "Free Meal",
	"水場適応" : "Aquatic Expert",
	"綿胞子草の知識" : "Sporepuff Expert",
	"綿帽子草の知識" : "Sporepuff Expert",		// Alt?
	// Palico system
	"オトモへの采配" : "Palico Rally",
	// Series skills; english strings sourced from IGN, double check in-game
	"惨爪竜の力" : "Odogaron Power",
	"抜刀術【力】" : "Punishing Draw",
	"風漂竜の恩恵" : "Legiana\'s Blessing",
	"幸運" : "Good Luck",
	"幻獣の恩恵" : "Kirin Blessing",
	"捕獲名人" : "Capture Master",
	"蛮顎竜の力" : "Anjanath Power",
	"奮起" : "Adrenaline",
	"蛮顎竜の闘志" : "Anjanath Will",
	"スタミナ上限突破" : "Stamina Cap Up",
	"熔山龍の奥義" : "Zorah Magdaros Mastery",
	"会心撃【特殊】" : "Critical Status",
	"角竜の力" : "Diablos Power",
	"鈍器使い" : "Bludgeoning",
	"桜火竜の奥義" : "Pink Rathian Mastery",
	"毒ダメージ強化" : "Poison Duration Up",
	"火竜の力" : "Rathalos Power",
	"会心撃【属性】" : "Critical Element",
	"風漂竜の恩寵" : "Legiana\'s Favor",
	"弓溜め段階解放" : "Bow Charge Plus",
	"惨爪竜の奥義" : "Odogaron Mastery",
	"剛刃研磨" : "Protective Polish",
	"火竜の奥義" : "Rathalos Mastery",
	"心眼／弾道強化" : "Mind\'s Eye/Ballistics",
	"角竜の奥義" : "Diablos Mastery",
	"無属性強化" : "Non-elemental Boost",
	"爆鎚竜の守護" : "Uragaan Protection",
	"ガード強化" : "Guard Up",
	"爆鱗竜の守護" : "Bazelgeuse Protection",
	"根性" : "Guts",
	"滅尽龍の飢餓" : "Nergigante Hunger",
	"加速再生" : "Hasten Recovery",
	"炎王龍の武技" : "Teostra Technique",
	"達人芸" : "Master\'s Touch",
	"鋼龍の飛翔" : "Kushala Daora Flight",
	"風圧完全無効" : "Nullify Wind Pressure",
	"屍套龍の命脈" : "Vaal Hazak Vitality",
	"超回復力" : "Super Recovery",
	"冥灯龍の神秘" : "Xeno\'jiiva Divinity",
	"業物／弾丸節約" : "Razor Sharp/Spare Shot",
	"幻獣の恩寵" : "Kirin Favor",
	"調査団の導き" : "Investigation Guidance?",
	"剥ぎ取り名人" : "Carving Celebrity?",
};

regex = {};
for (key in replacements) { regex[key] = new RegExp(key, 'g'); }

// Translate interface
function TranslateInterface() {
	// Tabs
	//document.getElementById("tab-search").textContent = "Search";
	//document.getElementById("tab-myset").textContent = "My Sets";
	//document.getElementById("tab-excludeinclude").textContent = "Filter";
	// Buttons
	document.getElementById("searchbutton").textContent = "Search";
	document.getElementById("extraskillsearchbutton").textContent = "Extra skills";
	document.getElementById("resetbutton").textContent = "Reset";
	// Search filters
	document.getElementById("sex").childNodes[0].textContent = "Male";
	document.getElementById("sex").childNodes[1].textContent = "Female";
	document.getElementById("period-gathering").parentNode.childNodes[0].textContent = "Progress ";
	document.getElementById("mindef").parentNode.childNodes[0].textContent = "Min Def ";
	document.getElementById("minres_fire").parentNode.childNodes[0].textContent = "Fire Def ";
	document.getElementById("minres_water").parentNode.childNodes[0].textContent = "Water Def ";
	document.getElementById("minres_thunder").parentNode.childNodes[0].textContent = "Thunder Def ";
	document.getElementById("minres_ice").parentNode.childNodes[0].textContent = "Ice Def ";
	document.getElementById("minres_dragon").parentNode.childNodes[0].textContent = "Dragon Def ";
	document.getElementById("limit").parentNode.childNodes[0].textContent = "Results ";
	// Weapon slot dropdown
	weaponslot_dropdown = document.getElementById("weapon").childNodes;
	for (var i = 0; i < weaponslot_dropdown.length; i++) {
		string = weaponslot_dropdown[i].textContent;
		string = string.replace("武器スロLV", "Weapon Slots: ").replace("武器スロなし", "Weapon Slots: None");
		weaponslot_dropdown[i].textContent = string;
	}
}

// Translate skill list container
// TODO: Translate level strings
function TranslateSkillListContainer() {
	skillitems = document.getElementsByClassName("skillitem");

	for (var i = 0; i < skillitems.length; i++) {
		string = skillitems[i].childNodes[0].textContent;
		for (key in replacements) {
			if (key == string) {
				string = string.replace(regex[key], replacements[key]);
			}
		}
		skillitems[i].childNodes[0].textContent = string;
	}
}

// Sort skil list container alphabetically
function SortSkillListContainer() {
	// Sort array alphabetically
	array = [];
	skillitems = document.getElementsByClassName("skillitem");
	for (var i = 0; i < skillitems.length; i++) {
		obj = { name: skillitems[i].childNodes[0].textContent, code: skillitems[i] };
		array.push(obj);
	}
	
	array.sort(function (a, b) {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});
	
	// Secure functionality
	div_buttons = document.getElementById("searchbutton").parentNode;
	div_results = document.getElementById("results");
	
	// Re-create container
	var skilllistcontainer = document.createElement("div");
	with(skilllistcontainer) { setAttribute("class", "skilllistcontainer"); }
	var skillgenre = document.createElement("div");
	with(skillgenre) { setAttribute("class", "skillgenre"); innerHTML = "Alphabetically sorted"; }
	skilllistcontainer.appendChild(skillgenre);
	
	for (var i = 0; i < array.length; i++) {
		skilllistcontainer.appendChild(array[i].code);
	}
	
	// Add extra buttons and remaining stuff
	btn_translateResults = document.createElement("button");
	btn_translateExtras = document.createElement("button");
	with(btn_translateResults) { setAttribute("id", "btn_translateResults"); setAttribute("onclick", "console.log('Hi')"); innerHTML = "Translate Results"; }
	with(btn_translateExtras) { setAttribute("id", "btn_translateExtras"); setAttribute("onclick", "console.log('Hi')"); innerHTML = "Translate Extra Skills"; }
	
	//div_buttons.appendChild(btn_translateResults);
	//div_buttons.appendChild(btn_translateExtras);
	skilllistcontainer.appendChild(div_buttons);
	skilllistcontainer.appendChild(div_results);
	
	document.getElementById("searchpane").replaceChild(skilllistcontainer, document.getElementById("skilllistcontainer"));
}

TranslateInterface();
TranslateSkillListContainer();
SortSkillListContainer();
