module.exports = {
    JWT_ACCESS: process.env.JWT_ACCESS || '$2b$10$iI9NcauLPBtngc6RAiFCROG8yuq1fKCwmwcwrt9ZNr4wRzlTOd7k.',
    JWT_REFRESH: process.env.JWT_REFRESH || '$2b$10$oYYtrQuGoNbrND75ZbH3UeSsb6pYD.4KY2SzAE0pKRIyqKRN8U0wq',
    JWT_ACCESS_TIME: process.env.JWT_ACCESS_TIME || '10m',
    JWT_REFRESH_TIME: process.env.JWT_REFRESH_TIME || '1d'
};
