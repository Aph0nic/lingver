const TelegramBot = require('node-telegram-bot-api');

const token = 'YOUR_TELEGRAM_BOT_TOKEN';

const bot = new TelegramBot(token, { polling: true });

// Russian alphabet
// Аа, Бб, Вв, Гг, Дд, 
// Ее, Ёё, Жж, Зз, Ии, 
// Йй, Кк, Лл, Мм, Нн, 
// Оо, Пп, Рр, Сс, Тт, 
// Уу, Фф, Хх, Цц, Чч, 
// Шш, Щщ, Ъъ, Ыы, Ьь, 
// Ээ, Юю, Яя

function replaceChars(text, userId, username) {
    const replacements = {
        ':uid': userId, ':uz': username,

        ':docs': '\n\nLingver was created with soul in JS!\nAnd launched on Linux >:3c\n\nCreator: https://github.com/Azuremuzzlekit\n\nLingver does not have actual commands. It simulates them by replacing a certain set of characters with the desired information. So you can insert this documentation into your text: "... :docs ...".\n\n!!!Lingver is case sensitive!!!\n\nCommands:\nLingver has only 3 commands:\n:uid - displays your ID\n:uz - displays your username\n:docs - displays this documentation\n\nLingver is primarily intended for simplified "conversion" of Russian letters into English. You enter a message and it responds with a ready translation.',

        'а': 'a',   'А': 'A',
        'б': 'b',   'Б': 'B',
        'в': 'v',   'В': 'V',
        'г': 'g',   'Г': 'G',
        'д': 'd',   'Д': 'D',
        'е': 'ye',  'Е': 'YE',
        'ё': 'yo',  'Ё': 'YO',
        'ж': 'zh',  'Ж': 'ZH',
        'з': 'z',   'З': 'Z',
        'и': 'i',   'И': 'I',
        'й': 'y',   'Й': 'Y',
        'к': 'k',   'К': 'K',
        'л': 'l',   'Л': 'L',
        'м': 'm',   'М': 'M',
        'н': 'n',   'Н': 'N',
        'о': 'o',   'О': 'O',
        'п': 'p',   'П': 'P',
        'р': 'r',   'Р': 'R',
        'с': 's',   'С': 'S',
        'т': 't',   'Т': 'T',
        'у': 'u',   'У': 'U',
        'ф': 'f',   'Ф': 'F',
        'х': 'h',   'Х': 'H',
        'ц': 'c',   'Ц': 'C',
        'ч': 'ch',  'Ч': 'CH',
        'ш': 'sh',  'Ш': 'SH',
        'щ': 'w',   'Щ': 'W',
        'ъ': '"',   'Ъ': '"',
        'ы': 'y',   'Ы': 'Y',
        'ь': '\'',  'Ь': '\'',
        'э': 'e',   'Э': 'E',
        'ю': 'yu',  'Ю': 'YU',
        'я': 'ya',  'Я': 'YA',
    };

    let newText = text;
    for (const [oldChar, newChar] of Object.entries(replacements)) {
        const regex = new RegExp(oldChar, 'g');
        newText = newText.replace(regex, newChar);
    }
    return newText;
}


bot.on('message', (msg) => {

    const chatId = msg.chat.id;

    const userId = msg.from.id;
    const username = msg.from.username;
    
    const text = msg.text;

    console.log('==================================');
    console.log('MESSAGE ID:\t', msg.message_id);
    console.log('----------------------------------');
    console.log('IS BOT:\t\t', msg.from.is_bot);
    console.log('USER ID:\t', userId);
    console.log('USERNAME:\t', username);
    console.log('FIRST NAME:\t', msg.from.first_name);
    console.log('LAST NAME:\t', msg.from.last_name);
    console.log('----------------------------------');
    console.log('LANG CODE:\t', msg.from.language_code);
    console.log('TYPE:\t\t', msg.type);
    console.log('DATE:\t\t', msg.date);
    console.log('\nTEXT:');
    console.log(msg.text);
    console.log('==================================\n\n');

    const newText = replaceChars(text, userId, username);

    bot.sendMessage(chatId, newText);
});


console.log('\n[i]-- The server is running.\n |-- Bot is ready to use.\n[link] - https://t.me/lingverow_bot\n[@] - lingverow_bot\n\n\n');
