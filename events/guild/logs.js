module.exports = (client, msg, Discord) => {
    console.log('asdsa')
client.on("messageDelete", async (msg) => {
    const logChannel = msg.guild.channels.cache.get("806721191552483350");

    const fetchLog = await msg.guild.fetchAuditLogs({
        limit: 1,
        type: "MESSAGE_DELETE",
    });

    const log = fetchLog.entries.first();

    if (!log) return;

    const { executor, target } = log;

    console.log(msg.author.id, executor.id);
    console.log(executor, target);

    if (target.bot) return;
    if (executor.bot) return;
    if (msg.author.id === executor.id) return;

    embed = new MessageEmbed()
        .setColor("#cf0a0a")
        .setTitle("Uma mensagem foi apagada !")
        .addFields(
            {
                name: `Mensagem de: `,
                value: `<@${msg.author.id}>`,
            },
            {
                name: `Apagado por: `,
                value: `<@${executor.id}>`,
            },
            {
                name: `No canal:`,
                value: `<#${msg.channel.id}>`,
            }
        )
        .setThumbnail(msg.author.displayAvatarURL());

    if (msg.content.length > 0) embed.addField("Mensagem: ", msg.content);
    if (msg.attachments.size > 0) embed.addField("Tinha anexo ?", "Sim !");

    await logChannel.send(embed);
});
}