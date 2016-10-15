<xsl:stylesheet   xmlns:xsl="http://www.w3.org/TR/WD-xsl">
  <xsl:template   math="/">
    <script   language="javascript">   
  <xsl:comment><![CDATA[   
  function showSubMenu()   
  {   
  window.event.cancelBubble=true   
  var   src   =   window.event.srcElement   
  if(src.status   !="Open")   
  {   
  src.status   = "Open"   
  for(var   i=1;i   <   src.children.length;i++)   
  {   
  src.children(i).style.display="inline"   
  src.style.color="purple"   
  }   
  }   
  else   
  {   
  src.status = "close"   
  for(var   i=1;i   <   src.children.length;i++)   
  {   
  src.children(i).style.display="none"   
  src.style.color="blue"   
  }   
  }   
  }   
    
  ]]></xsl:comment>   
  </script>
    <body>
    <div>
      <xsl:apply-templates match="menu"/>
    </div>
    </body>
  </xsl:template>
  <xsl:template match="menu">
    <xsl:for-each select="menuItem1">
      <div status="close" onclick="javascript:return showSubMenu();" color="blue"><xsl:value-of select="@id"/>
        <xsl:if test="@ischild[.='true']">
          <xsl:apply-templates match="menuItem2"/></xsl:if>
      </div>
    </xsl:for-each>
  </xsl:template>
  <xsl:template match="menuItem2">
    <div status="close" style="display:none" onclick="javascript:return showSubMenu();" color="blue"><br/>
      &#160;&#160;&#160;&#160;<xsl:value-of select="@id"/>
      <xsl:if test="@ischild[.='true']">
        <xsl:apply-templates match="menuItem3"/></xsl:if>
    </div>
  </xsl:template>
  <xsl:template match="menuItem3">
    <div status="close" style="display:none" onclick="javascript:return showSubMenu();" color="blue"><br/>
      &#160;&#160;&#160;&#160;&#160;&#160;<xsl:value-of select="@id"/></div>
  </xsl:template>
</xsl:stylesheet>
