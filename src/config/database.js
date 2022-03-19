module.exports = {
    dialect: 'mysql',
    host: 'sqlomnistack.cvsydbdmcfjf.sa-east-1.rds.amazonaws.com',
    username: 'admin',
    // password: 'casa@2015',
    password: 'casa2015',
    database: 'sqlOmniStack',
    define: {
        timestamps: true, // terá o created_ad e o updated_at.
        underscored: true, // terá o formato das colunas como snake_case
    }
}