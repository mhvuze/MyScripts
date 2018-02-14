// ==UserScript==
// @name         MH:World Skill Sim Translate
// @namespace
// @version      0.6
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
	"スリンガー装填数ＵＰ" : "Slinger Capacity",		// Alt
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
	"心眼／弾導強化" : "Mind\'s Eye/Ballistics",	// Alt?
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
	"ギルドの導き" : "Guild Guidance?",
	"龍封力強化" : "Dragon Seal Boost?",
	"毒ビン追加" : "Poison Coating?",
	"爆撃ビン追加" : "Blast Coating?",
	"麻痺ビン追加" : "Paralysis Coating?",
	"睡眠ビン追加" : "Sleep Coating?",
	"爆破ビン追加" : "Blast Coating?",
};

replacements_armor = {
	// Decos
	// TODO: These definitely need double checking, also wikidb is missing some for now I think
	"加護珠【１】" : "Protection Jewel 1",
	"速納珠【１】" : "Sheath Jewel 1",
	"抜刀珠【２】" : "Draw Jewel 2",
	"耐毒珠【１】" : "Antidote Jewel 1",
	"耐麻珠【１】" : "Antipara Jewel 1",
	"耐眠珠【１】" : "Pep Jewel 1",
	"耐絶珠【１】" : "Steadfast Jewel 1",
	"耐爆珠【１】" : "Antiblast Jewel 1",
	"耐裂珠【１】" : "Suture Jewel 1",
	"耐防珠【１】" : "Def Lock Jewel 1",
	"防音珠【３】" : "Earplug Jewel 3",
	"防風珠【２】" : "Wind Resist Jewel 2",
	"耐震珠【２】" : "Footing Jewel 2",
	"耐瘴珠【１】" : "Heat Resist Jewel 2",
	"攻撃珠【１】" : "Attack Jewel 1",
	"防御珠【１】" : "Defense Jewel 1",
	"体力珠【１】" : "Vitality Jewel 1",
	"早復珠【１】" : "Recovery Jewel 1",
	"耐火珠【１】" : "Fire Res Jewel 1",
	"耐水珠【１】" : "Water Res Jewel 1",
	"耐氷珠【１】" : "Ice Res Jewel 1",
	"耐雷珠【１】" : "Thunder Res Jewel 1",
	"耐龍珠【１】" : "Dragon Res Jewel 1",
	"耐属珠【１】" : "Resistor Jewel 1",
	"火炎珠【１】" : "Blaze Jewel 1",
	"流水珠【１】" : "Stream Jewel 1",
	"氷結珠【１】" : "Frost Jewel 1",
	"雷光珠【１】" : "Bolt Jewel 1",
	"破龍珠【１】" : "Dragon Jewel 1",
	"毒珠【１】" : "Venom Jewel 1",
	"麻痺珠【１】" : "Paralyzer Jewel 1",
	"睡眠珠【１】" : "Sleep Jewel 1",
	"爆破珠【１】" : "Blast Jewel 1",
	"毒瓶珠【３】" : "Poisoncoat Jewel 3",
	"痺瓶珠【３】" : "Paracoat Jewel 3",
	"眠瓶珠【３】" : "Sleepcoat Jewel 3",
	"爆瓶珠【３】" : "Blastcoat Jewel 3",
	"解放珠【３】" : "Release Jewel 3",
	"達人珠【１】" : "Expert Jewel 1",
	"痛撃珠【２】" : "Tenderizer Jewel 2",
	"短縮珠【２】" : "Charger Jewel 2",
	"匠珠【３】" : "Handicraft Jewel 3",
	"重撃珠【２】" : "Destroyer Jewel 2",
	"ＫＯ珠【２】" : "KO Jewel 2",
	"飛燕珠【２】" : "Flight Jewel 2",
	"全開珠【２】" : "Throttle Jewel 2",
	"挑戦珠【２】" : "Challenger Jewel 2",
	"無傷珠【２】" : "Flawless Jewel 2",
	"底力珠【２】" : "Potential Jewel 2",
	"逆境珠【１】" : "Fortitude Jewel 1",
	"逆上珠【２】" : "Furor Jewel 2",
	"鼓笛珠【１】" : "Sonorous Jewel 1",
	"特射珠【１】" : "Trueshot Jewel 1",
	"砲術珠【１】" : "Artillery Jewel 1",
	"砲手珠【１】" : "Heavy Artillery Jewel 1",
	"強走珠【２】" : "Sprinter Jewel 2",
	"体術珠【２】" : "Physique Jewel 2",
	"節食珠【１】" : "Hungerless Jewel 1",
	"回避珠【２】" : "Evasion Jewel 2",
	"跳躍珠【２】" : "Jumping Jewel 2",
	"鉄壁珠【１】" : "Ironwall Jewel 1",
	"友愛珠【１】" : "Friendship Jewel 1",
	"無食珠【１】" : "Satiated Jewel 1",
	"早食珠【１】" : "Gobbler Jewel 1",
	"研磨珠【１】" : "Grinder Jewel 1",
	"爆師珠【１】" : "Bomber Jewel 1",
	"茸好珠【１】" : "Fungiform Jewel 1",
	"采配珠【１】" : "Gathering Jewel 1",
	"植学珠【１】" : "Botany Jewel 1",
	"地学珠【１】" : "Geology Jewel 1",
	"渾身珠【２】" : "Mighty Jewel 2",
	"投石珠【１】" : "Stonethrower Jewel 1",
	"耐衝珠【３】" : "Brace Jewel 3",
	"煙復珠【１】" : "Smoke Jewel 1",
	"標本珠【１】" : "Specimen Jewel 1",
	"嗅覚珠【１】" : "Scent Jewel 1",
	"威嚇珠【１】" : "Intimidator Jewel 1",
	"沼渡珠【１】" : "Mudshield Jewel 1",
	"滑走珠【２】" : "Slider Jewel 2",
	"治癒珠【１】" : "Medicine Jewel 1",
	"強弾珠【３】" : "Forceshot Jewel 3",
	"貫通珠【３】" : "Pierce Jewel 3",
	"散弾珠【３】" : "Spread Jewel 3",
	"龍封珠【３】" : "Dragonseal Jewel 3",
	"心眼珠【２】" : "Discovery Jewel 2",
	"強弓珠【２】" : "Mighty Bow Jewel 2",
	"強壁珠【２】" : "Shield Jewel 2",
	"無撃珠【２】" : "Elementless Jewel 2",
	// Special Names
	"竜王の隻眼" : "Dragonking Eyepatch ",
	// Basics
	"ヘルム" : " Helm ",
	"ヘッド" : " Headgear ",
	"テスタ" : " Vertex ",
	"ゴーグル" : " Goggles ",
	"ロポス" : " Lobos ",
	"ベスト" : " Vest ",
	"メイル" : " Mail ",
	"スーツ" : " Suit ",
	"ハイド" : " Hide ",
	"グラブ" : " Gloves ",
	"クロウ" : " Claws ",
	"アーム" : " Vambraces ",
	"ガード" : " Guards ",
	"ベルト" : " Belt ",
	"コイル" : " Coil ",
	"スパイン" : " Spine ",
	"パンツ" : " Trousers ",
	"グリーヴ" : " Greaves ",
	"レガース" : " Leg Guards ",
	"フット" : " Spurs ",
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
	"オーグ" : "Nergigante",
	"ゾラマグナ" : "Zorah",
	"ギルド" : "Guild",
	"ダマスク" : "Damascus",
	"バゼル" : "Bazel",
	// Rest
	"スロット" : " Slots",
	"なし" : "No Equipment",
};

regex = {};
for (key in replacements) { regex[key] = new RegExp(key, 'g'); }
regex_armor = {};
for (key in replacements_armor) { regex_armor[key] = new RegExp(key, 'g'); }

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
function TranslateSkillListContainer() {
	var rgx = /Lv\d/;
	skillitems = document.getElementsByClassName("skillitem");
	for (var i = 0; i < skillitems.length; i++) {
		childs = skillitems[i].childNodes;
		for (var j = 0; j < childs.length; j++) {
			string = childs[j].textContent;
			for (key in replacements) {
				if (key == string) {
					string = string.replace(regex[key], replacements[key]);
				} else if (string.includes(key) && string.includes(rgx.exec(string))) {
					splitters = string.split("Lv");
					if (key == splitters[0]) {
						string = string.replace(regex[key], replacements[key] + " ");
					}
				}
			}
			childs[j].textContent = string;
		}
	}
}

// Sort skill list container alphabetically
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
	// TODO: Fix the button styles
	btn_translateResults = document.createElement("button");
	btn_translateExtras = document.createElement("button");
	with(btn_translateResults) { setAttribute("id", "btn_translateResults"); innerHTML = "Translate Results"; }
	with(btn_translateExtras) { setAttribute("id", "btn_translateExtras"); innerHTML = "Translate Extra Skills"; }
	
	div_buttons.appendChild(btn_translateResults);
	div_buttons.appendChild(btn_translateExtras);
	skilllistcontainer.appendChild(div_buttons);
	skilllistcontainer.appendChild(div_results);
	
	document.getElementById("searchpane").replaceChild(skilllistcontainer, document.getElementById("skilllistcontainer"));
	document.getElementById("btn_translateResults").addEventListener ("click", TranslateResults, false);
	document.getElementById("btn_translateExtras").addEventListener ("click", TranslateExtras, false);
}

// Translate results table
function TranslateResults() {
	//table = document.getElementsByClassName("table table-hover")[0];
	//resultitems = document.getElementsByClassName("resultitem resultitemoverview");
	
	// Translate rows in table overview
	equipmentitems = document.getElementsByClassName("equipmentitem");
	for (var i = 0; i < equipmentitems.length; i++) {
		string = equipmentitems[i].textContent;
		equipmentitems[i].textContent = TranslateEquipNames(string);
	}
	
	// Translate equip table in detail view
	equiptables = document.getElementsByClassName("saved-result-element table table-striped");
	for (var i = 0; i < equiptables.length; i++) {
		columns = equiptables[i].getElementsByTagName("td");
		for (var j = 2; j < columns.length; j++) {
			string = columns[j].childNodes[0].text;
			
			// Handle charm
			if (string == null) { string = columns[j].textContent; columns[j].textContent = TranslateEquipNames(string); }
			else { columns[j].childNodes[0].text = TranslateEquipNames(string); }
			
			j += 3;
		}
		string = columns[columns.length - 1].textContent;
		columns[columns.length - 1].textContent = TranslateEquipNames(string);
	}
	
	// Translate skill table in detail view
	// TODO: Fix skill links, should go hand in hand with res table
	skilltables = document.getElementsByClassName("table table-striped");		// TODO: Exclude elemental res tables, doesn't really matter for now though
	for (var i = 0; i < skilltables.length; i++) {
		columns = skilltables[i].getElementsByTagName("td");
		for (var j = 0; j < columns.length; j++) {
			string = columns[j].textContent;
			columns[j].textContent = TranslateSkillNames(string);
			j += 9;
		}
	}
}

// Translate extra skills
function TranslateExtras() {
	extraskillrows = document.getElementsByClassName("extraskillrow");
	for (var i = 0; i < extraskillrows.length; i++) {
		string = extraskillrows[i].childNodes[0].text;
		for (key in replacements) {
			splitters = string.split("Lv");
			if (key == splitters[0]) {
				string = string.replace(regex[key], replacements[key] + " ");
			}
		}
		extraskillrows[i].childNodes[0].text = string;
		extraskillrows[i].childNodes[0].setAttribute("onclick", "return onExtraSkillClick('" + string + "')");
	}
}

// Modify My Set pane
function ModifyMySetPane() {
	pane = document.getElementById("mysetpane");
	btn_translateSets = document.createElement("button");
	with(btn_translateSets) { setAttribute("id", "btn_translateSets"); innerHTML = "Translate Sets"; }
	pane.appendChild(btn_translateSets);
	document.getElementById("btn_translateSets").addEventListener ("click", TranslateResults, false);
}

// Translate equipment names
function TranslateEquipNames(string) {
	for (key in replacements_armor) {
		string = string.replace(regex_armor[key], replacements_armor[key]);
	}
	return string;
}

// Translate skill names
function TranslateSkillNames(string) {
	for (key in replacements) {
		if (key == string) { 
			string = string.replace(regex[key], replacements[key]);
		} else if (string == "スロット") {
			string = "Slots";
		}
	}
	return string;
}

TranslateInterface();
TranslateSkillListContainer();
SortSkillListContainer();
