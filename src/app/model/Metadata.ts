export class Metadata {
    public static value = {"schema":{"namespace":"CompetitionFisher.Data","alias":"Self","annotation:UseStrongSpatialTypes":"false","xmlns:annotation":"http://schemas.microsoft.com/ado/2009/02/edm/annotation","xmlns:customannotation":"http://schemas.microsoft.com/ado/2013/11/edm/customannotation","xmlns":"http://schemas.microsoft.com/ado/2009/11/edm","cSpaceOSpaceMapping":"[[\"CompetitionFisher.Data.ApplicationUser\",\"CompetitionFisher.Data.Entities.ApplicationUser\"],[\"CompetitionFisher.Data.Championship\",\"CompetitionFisher.Data.Entities.Championship\"],[\"CompetitionFisher.Data.Competition\",\"CompetitionFisher.Data.Entities.Competition\"],[\"CompetitionFisher.Data.Result\",\"CompetitionFisher.Data.Entities.Result\"],[\"CompetitionFisher.Data.User\",\"CompetitionFisher.Data.Entities.User\"]]","entityType":[{"name":"ApplicationUser","customannotation:ClrType":"CompetitionFisher.Data.Entities.ApplicationUser, CompetitionFisher.Data, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null","key":{"propertyRef":{"name":"Id"}},"property":[{"name":"Id","type":"Edm.Guid","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"FaceBookId","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true","nullable":"false"}],"navigationProperty":[{"name":"ChampionshipsWhereAdmin","relationship":"Self.Championship_Admins","fromRole":"Championship_Admins_Target","toRole":"Championship_Admins_Source"},{"name":"CompetitionsWhereAdmin","relationship":"Self.Competition_Admins","fromRole":"Competition_Admins_Target","toRole":"Competition_Admins_Source"},{"name":"User","relationship":"Self.User_ApplicationUser","fromRole":"User_ApplicationUser_Target","toRole":"User_ApplicationUser_Source"}]},{"name":"Championship","customannotation:ClrType":"CompetitionFisher.Data.Entities.Championship, CompetitionFisher.Data, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null","key":{"propertyRef":{"name":"Id"}},"property":[{"name":"Id","type":"Edm.Guid","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"Name","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true","nullable":"false"}],"navigationProperty":[{"name":"Admins","relationship":"Self.Championship_Admins","fromRole":"Championship_Admins_Source","toRole":"Championship_Admins_Target"},{"name":"Competitions","relationship":"Self.Championship_Competitions","fromRole":"Championship_Competitions_Source","toRole":"Championship_Competitions_Target"}]},{"name":"Competition","customannotation:ClrType":"CompetitionFisher.Data.Entities.Competition, CompetitionFisher.Data, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null","key":{"propertyRef":{"name":"Id"}},"property":[{"name":"Id","type":"Edm.Guid","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"ChampionshipId","type":"Edm.Guid"},{"name":"Name","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"Date","type":"Edm.DateTime","precision":"0","nullable":"false"}],"navigationProperty":[{"name":"Admins","relationship":"Self.Competition_Admins","fromRole":"Competition_Admins_Source","toRole":"Competition_Admins_Target"},{"name":"Championship","relationship":"Self.Championship_Competitions","fromRole":"Championship_Competitions_Target","toRole":"Championship_Competitions_Source"},{"name":"Results","relationship":"Self.Competition_Results","fromRole":"Competition_Results_Source","toRole":"Competition_Results_Target"},{"name":"Users","relationship":"Self.Competition_Users","fromRole":"Competition_Users_Source","toRole":"Competition_Users_Target"}]},{"name":"Result","customannotation:ClrType":"CompetitionFisher.Data.Entities.Result, CompetitionFisher.Data, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null","key":{"propertyRef":{"name":"Id"}},"property":[{"name":"Id","type":"Edm.Guid","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"CompetitionId","type":"Edm.Guid","nullable":"false"},{"name":"UserId","type":"Edm.Guid","nullable":"false"},{"name":"TotalNumber","type":"Edm.Int32","nullable":"false"},{"name":"TotalWeight","type":"Edm.Int32","nullable":"false"}],"navigationProperty":[{"name":"Competition","relationship":"Self.Competition_Results","fromRole":"Competition_Results_Target","toRole":"Competition_Results_Source"},{"name":"User","relationship":"Self.User_Results","fromRole":"User_Results_Target","toRole":"User_Results_Source"}]},{"name":"User","customannotation:ClrType":"CompetitionFisher.Data.Entities.User, CompetitionFisher.Data, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null","key":{"propertyRef":{"name":"Id"}},"property":[{"name":"Id","type":"Edm.Guid","nullable":"false","annotation:StoreGeneratedPattern":"None"},{"name":"FirstName","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"LastName","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true","nullable":"false"},{"name":"Email","type":"Edm.String","maxLength":"50","fixedLength":"false","unicode":"true"}],"navigationProperty":[{"name":"ApplicationUser","relationship":"Self.User_ApplicationUser","fromRole":"User_ApplicationUser_Source","toRole":"User_ApplicationUser_Target"},{"name":"Competitions","relationship":"Self.Competition_Users","fromRole":"Competition_Users_Target","toRole":"Competition_Users_Source"},{"name":"Results","relationship":"Self.User_Results","fromRole":"User_Results_Source","toRole":"User_Results_Target"}]}],"association":[{"name":"Championship_Admins","end":[{"role":"Championship_Admins_Source","type":"Edm.Self.Championship","multiplicity":"*"},{"role":"Championship_Admins_Target","type":"Edm.Self.ApplicationUser","multiplicity":"*"}]},{"name":"Competition_Admins","end":[{"role":"Competition_Admins_Source","type":"Edm.Self.Competition","multiplicity":"*"},{"role":"Competition_Admins_Target","type":"Edm.Self.ApplicationUser","multiplicity":"*"}]},{"name":"User_ApplicationUser","end":[{"role":"User_ApplicationUser_Source","type":"Edm.Self.User","multiplicity":"1"},{"role":"User_ApplicationUser_Target","type":"Edm.Self.ApplicationUser","multiplicity":"0..1"}],"referentialConstraint":{"principal":{"role":"User_ApplicationUser_Source","propertyRef":{"name":"Id"}},"dependent":{"role":"User_ApplicationUser_Target","propertyRef":{"name":"Id"}}}},{"name":"User_Results","end":[{"role":"User_Results_Source","type":"Edm.Self.User","multiplicity":"1"},{"role":"User_Results_Target","type":"Edm.Self.Result","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"User_Results_Source","propertyRef":{"name":"Id"}},"dependent":{"role":"User_Results_Target","propertyRef":{"name":"UserId"}}}},{"name":"Competition_Results","end":[{"role":"Competition_Results_Source","type":"Edm.Self.Competition","multiplicity":"1"},{"role":"Competition_Results_Target","type":"Edm.Self.Result","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"Competition_Results_Source","propertyRef":{"name":"Id"}},"dependent":{"role":"Competition_Results_Target","propertyRef":{"name":"CompetitionId"}}}},{"name":"Competition_Users","end":[{"role":"Competition_Users_Source","type":"Edm.Self.Competition","multiplicity":"*"},{"role":"Competition_Users_Target","type":"Edm.Self.User","multiplicity":"*"}]},{"name":"Championship_Competitions","end":[{"role":"Championship_Competitions_Source","type":"Edm.Self.Championship","multiplicity":"0..1"},{"role":"Championship_Competitions_Target","type":"Edm.Self.Competition","multiplicity":"*"}],"referentialConstraint":{"principal":{"role":"Championship_Competitions_Source","propertyRef":{"name":"Id"}},"dependent":{"role":"Championship_Competitions_Target","propertyRef":{"name":"ChampionshipId"}}}}],"entityContainer":{"name":"CfContext","customannotation:UseClrTypes":"true","entitySet":[{"name":"ApplicationUsers","entityType":"Self.ApplicationUser"},{"name":"Championships","entityType":"Self.Championship"},{"name":"Competitions","entityType":"Self.Competition"},{"name":"Results","entityType":"Self.Result"},{"name":"Users","entityType":"Self.User"}],"associationSet":[{"name":"Championship_Admins","association":"Self.Championship_Admins","end":[{"role":"Championship_Admins_Source","entitySet":"Championships"},{"role":"Championship_Admins_Target","entitySet":"ApplicationUsers"}]},{"name":"Competition_Admins","association":"Self.Competition_Admins","end":[{"role":"Competition_Admins_Source","entitySet":"Competitions"},{"role":"Competition_Admins_Target","entitySet":"ApplicationUsers"}]},{"name":"User_ApplicationUser","association":"Self.User_ApplicationUser","end":[{"role":"User_ApplicationUser_Source","entitySet":"Users"},{"role":"User_ApplicationUser_Target","entitySet":"ApplicationUsers"}]},{"name":"User_Results","association":"Self.User_Results","end":[{"role":"User_Results_Source","entitySet":"Users"},{"role":"User_Results_Target","entitySet":"Results"}]},{"name":"Competition_Results","association":"Self.Competition_Results","end":[{"role":"Competition_Results_Source","entitySet":"Competitions"},{"role":"Competition_Results_Target","entitySet":"Results"}]},{"name":"Competition_Users","association":"Self.Competition_Users","end":[{"role":"Competition_Users_Source","entitySet":"Competitions"},{"role":"Competition_Users_Target","entitySet":"Users"}]},{"name":"Championship_Competitions","association":"Self.Championship_Competitions","end":[{"role":"Championship_Competitions_Source","entitySet":"Championships"},{"role":"Championship_Competitions_Target","entitySet":"Competitions"}]}]}}};
}