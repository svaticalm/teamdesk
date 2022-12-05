const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

const getItems = () => {
  return new Promise((resolve, reject) => {
    try {
      const response = notion.databases.query({
        database_id: databaseId,
        sorts: [
          {
            property: 'PRIORITY',
            direction: 'ascending',
          },
        ],
      });
      console.log('Success! Bases gets');
      resolve(response);
    } catch (error) {
      reject(error.body);
      console.error(error.body);
    }
  });
};

module.exports = {
  getItems,
};
