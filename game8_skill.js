// ==UserScript==
// @name         MH:World Skill Sim Translate
// @namespace
// @version      0.1
// @description  Replace japanese MH:World strings with English
// @author       MHVuze
// @match        https://game8.jp/mhw/199948
// @grant        none
// ==/UserScript==

replacements = {
	// Action system
	"運搬の達人" : "Pro Transporter",
	"回避距離UP" : "Evade Extender",
	"回避性能" : "Evade Window",
	"滑走強化" : "Affinity Sliding",
	"クライマー" : "Cliffhanger",
	"死中に活" : "Resuscitate",
	"しゃがみ移動速度UP" : "Speed Crawler",
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
	"体力増強" : "Health Boost",
	"ひるみ軽減" : "Flinch Free",
	"フルチャージ" : "Peak Performance",
	"防御" : "Defense Boost",
	"防御力DOWN耐性" : "Iron Skin",
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
	"氷属性攻撃強化" : "Ice Attack",
	"逆恨み" : "Resentment",
	"散弾・剛射強化" : "Spread/Power Shots",
	"弱点特効" : "Weakness Exploit",
	"睡眠属性強化" : "Sleep Attack",
	"属性解放/装填拡張" : "Free Elem/Ammo Up",
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
	// Fix japanese stuff
	"、" : ", ",
	// Skill system names
	"アクション系" : "Action Skills",
	"ステータス系" : "Status Skills",
	"対モンスター系" : "Monster Resistance Skills",
	"武器強化系" : "Weapon Improvement Skills",
	"フィールド系" : "Field Skills",
	"オトモ系" : "Palico Skills",
	"シリーズスキル" : "Armor Series Skills",
};

replacements_armor = {
	// Basics
	"ヘルム" : " Helm ",
	"ヘッド" : " Headgear ",
	"テスタ" : " Vertex ",
	"ゴーグル" : " Goggles ",
	"ロポス" : " Lobos ",
	"ベスト" : " Vest ",
	"メイル" : " Mail ",
	"グラブ" : " Gloves ",
	"アーム" : " Vambraces ",
	"ガード" : " Guards ",
	"ベルト" : " Belt ",
	"コイル" : " Coil ",
	"パンツ" : " Trousers ",
	"グリーヴ" : " Greaves ",
	"の護石" : " Charm ",
	// Material
	"レザー" : "Leather",
	"チェーン" : "Chainmail",
	"ハンター" : "Hunter",
	"ボーン" : "Bone",
	"ランゴ" : "Vespoid",
	"ガライー" : "Gajau",
	"ジャグラス" : "Jagras",
	"クルル" : "Kulu",
	"アロイ" : "Alloy",
	"プケプケ" : "Pukei",
	"ボロス" : "Barroth",
	"ジュラ" : "Jyura",
	"カガチ" : "Kadachi",
	"ハイメタ" : "High Metal",
	"オウビート" : "King Beetle",
	"パピメル" : "Butterfly",
	"シャム" : "Shamos",
	"タロス" : "Hornetaur",
	"ジャナフ" : "Anja",
	"レイア" : "Rathian",
	"ツィツィ" : "Tzitzi",
	"ウルムー" : "Lumu",
	"ギルオス" : "Girros",
	"バルキン" : "Baan",
	"インゴット" : "Ingot",
	"デスギア" : "Death Stench",
	"ブリゲイド" : "Brigade",
	"ギエナ" : "Legiana",
	"ガロン" : "Odogaron",
	"レウス" : "Rathalos",
	"ディアブロ" : "Diablos",
	"キリン" : "Kirin",
	"リオハート" : "Rathian Heart",
	"ラヴァ" : "Lavasioth",
	"リオソウル" : "Rath Soul",
	"ディアネロ" : "Diablos Nero",
	"ガンキン" : "Uragaan",
	"ドーベル" : "Dober",
	"カイザー" : "Kaiser",
	"クシャナ" : "Kushala",
	"ゼノラージ" : "Xeno\'jiiva",
	// Rest
	"スロ" : " Slots",
	"装備なし" : "No Equipment",
};

regex = {};
for (key in replacements) { regex[key] = new RegExp(key, 'g'); }
regex_armor = {};
for (key in replacements_armor) { regex_armor[key] = new RegExp(key, 'g'); }

// Translate headings
headings = document.getElementsByClassName("a-header--3");
headings[0].innerHTML = "Changelog";
headings[1].innerHTML = "1. Select Skills";
headings[2].innerHTML = "2. Select Skill Levels";
headings[3].innerHTML = "3. Specify Search Settings";
headings[4].innerHTML = "4. Search Results";

// Translate buttons
document.getElementsByClassName("c-btn c-btn--green c-btn--block c-btn--sm track_nier")[0].innerHTML = "Search";
document.getElementById("sex_table_name").innerHTML = "Sex";
document.getElementById("sex_man").innerHTML = "Male";
document.getElementById("sex_woman").innerHTML = "Female";
document.getElementById("is_ornament_table_name").innerHTML = "Decos";
document.getElementById("is_ornament").innerHTML = "All";
document.getElementById("is_only_maka_ornament").innerHTML = "Alchemy";
document.getElementById("non_ornament").innerHTML = "None";
document.getElementById("weapon_slot_table_name").innerHTML = "Weapon";

// Create buttons
var btn = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");

// Skill Selection Table Buttons
with(btn) { setAttribute("id", "BtnTranslateSkillSelection"); setAttribute("class", "check_screen"); innerHTML = "Translate"; }
headings[1].appendChild(btn);
document.getElementById("BtnTranslateSkillSelection").addEventListener ("click", TranslateSkillSelectionTable, false);
with(btn4) { setAttribute("id", "BtnAlphabeticalSkillSelection"); setAttribute("class", "check_screen"); innerHTML = "Translate & Sort"; }
headings[1].appendChild(btn4);
document.getElementById("BtnAlphabeticalSkillSelection").addEventListener ("click", SortSkillSelectionTable, false);

// Skill Level Section Button
with(btn2) { setAttribute("id", "BtnTranslateSkillLevel"); setAttribute("class", "check_screen"); innerHTML = "Translate"; };
headings[2].appendChild(btn2);
document.getElementById("BtnTranslateSkillLevel").addEventListener ("click", TranslateSkillLevelSelection, false);

// Skill Search Result Button
with(btn3) { setAttribute("id", "BtnTranslateSkillSearch"); setAttribute("class", "check_screen"); innerHTML = "Translate"; };
headings[4].appendChild(btn3);
document.getElementById("BtnTranslateSkillSearch").addEventListener ("click", TranslateSkillSearchResult, false);

// Debug function
function debug() {
	console.log("Triggered");
}

// Sort skill selection table
function SortSkillSelectionTable() {
	TranslateSkillSelectionTable();
	
	array = [];	
	skill_tags = document.getElementsByClassName("skill_table_cell ");
	for (var i = 0; i < skill_tags.length; i++) {
		obj = { name: skill_tags[i].innerHTML, code: skill_tags[i] };
		array.push(obj);
	}
	
	array.sort(function (a, b) {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});
	
	var section = document.createElement("div");
	with(section) { setAttribute("id", "skill_type_name7"); setAttribute("class", "skill_type_name"); setAttribute("style", "position: relative;cursor:pointer;"); setAttribute("onclick", "open_armor_skills_table(this.id, 7)"); innerHTML = "Alphabetical"; }
	document.getElementById("armor_skills_list").appendChild(section);
	
	var table = document.createElement("div");
	var table_child0 = document.createElement("div");
	with(table_child0) { setAttribute("class", "skill_table"); }
	for (var i = 0; i < array.length; i++) {
		var row = document.createElement("div");
		with(row) { setAttribute("class", "skill_table_row"); }
		row.appendChild(array[i].code);
		row.appendChild(array[i+1].code);
		table_child0.appendChild(row);
		i += 1
	}
	table.appendChild(table_child0);
	document.getElementById("armor_skills_list").appendChild(table);
}

// Translate skill selection table
function TranslateSkillSelectionTable() {
	skill_tags = document.getElementsByClassName("skill_table_cell ");
	skill_system_tags = document.getElementsByClassName("skill_type_name");

	for (var i = 0; i < skill_tags.length; i++) {
		string = skill_tags[i].innerHTML;
		for (key in replacements) {
			if (key == string) {
				string = string.replace(regex[key], replacements[key]);
			}
		}
		
		if (string.includes("<div style=")) {
			for (key in replacements) {
				string = string.replace(regex[key], replacements[key]);
			}
			//console.log(string);
		}
		skill_tags[i].innerHTML = string;
	}

	for (var i = 0; i < skill_system_tags.length; i++) {
		string = skill_system_tags[i].textContent;
		for (key in replacements) {
			if (key == string) {
				string = string.replace(regex[key], replacements[key]);
			}
		}
		skill_system_tags[i].textContent = string;
	}
}

// Translate skill level selection
// TODO: Add support for series skills dropdowns
function TranslateSkillLevelSelection() {
	skill_names = document.getElementsByClassName("select_armor_skill_content");

	for (var i = 0; i < skill_names.length; i++) {
		string = skill_names[i].childNodes[0].nodeValue;
		for (key in replacements) {
			if (key == string) {
				string = string.replace(regex[key], replacements[key]);
			}
		}
		skill_names[i].childNodes[0].nodeValue = string;
	}
}

// Translate skill search result
function TranslateSkillSearchResult() {
	result_table = document.getElementsByClassName("a-table")[0].childNodes[0];
	table_rows = result_table.getElementsByTagName("tr");
	
	for (var i = 0; i < table_rows.length; i++) {
		string = table_rows[i].getElementsByTagName("td")[1].innerHTML;
		table_rows[i].getElementsByTagName("td")[1].innerHTML = string.replace("防", "D");
		string = table_rows[i+1].getElementsByTagName("td")[0].innerHTML;			// Helm
		table_rows[i+1].getElementsByTagName("td")[0].innerHTML = TranslateArmorNames(string);
		string = table_rows[i+1].getElementsByTagName("td")[1].innerHTML;			// Arm
		table_rows[i+1].getElementsByTagName("td")[1].innerHTML = TranslateArmorNames(string);
		string = table_rows[i+2].getElementsByTagName("td")[0].innerHTML;			// Mail
		table_rows[i+2].getElementsByTagName("td")[0].innerHTML = TranslateArmorNames(string);
		string = table_rows[i+2].getElementsByTagName("td")[1].innerHTML;			// Waist
		table_rows[i+2].getElementsByTagName("td")[1].innerHTML = TranslateArmorNames(string);
		string = table_rows[i+3].getElementsByTagName("td")[0].innerHTML;			// Leg
		table_rows[i+3].getElementsByTagName("td")[0].innerHTML = TranslateArmorNames(string);
		string = table_rows[i+3].getElementsByTagName("td")[1].innerHTML;			// Charm
		table_rows[i+3].getElementsByTagName("td")[1].innerHTML = TranslateArmorNames(string);
		string = table_rows[i+4].getElementsByTagName("div")[0].innerHTML;			// Decos
		table_rows[i+4].getElementsByTagName("div")[0].innerHTML = TranslateArmorNames(string);
		string = table_rows[i+5].getElementsByTagName("td")[0].innerHTML;			// Skills
		table_rows[i+5].getElementsByTagName("td")[0].innerHTML = TranslateArmorSkills(string);
		i += 5;
	}
}

// Process armor names
function TranslateArmorNames(string) {
	for (key in replacements_armor) {
		string = string.replace(regex_armor[key], replacements_armor[key]);
	}
	return string;
}

// Process armor skills
function TranslateArmorSkills(string) {
	var skills = string.split("、");
	string = "";
	
	for (var j = 0; j < skills.length; j++) {
		var skill_level = skills[j].split(" ");
		for (var i = 0; i < skill_level.length; i++) {
			for (key in replacements) {
				if (key == skill_level[i]) {
					string += skill_level[i].replace(regex[key], replacements[key]);
				}
			}
			string += " " + skill_level[i+1] + ", ";
			i += 1;
		}
	}
	string = string.replace(/,([^,]*)$/,"$1");
	return string;
}
