
import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import ProposalPage from "@/components/ProposalPage";
import MessagePage from "@/components/MessagePage";
import PoemPage from "@/components/PoemPage";
import FinalPage from "@/components/FinalPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const restartProposal = () => {
    setCurrentPage(0);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <PageTransition visible={currentPage === 0}>
        <ProposalPage onYesClick={goToNextPage} />
      </PageTransition>

      <PageTransition visible={currentPage === 1}>
        <MessagePage onContinue={goToNextPage} />
      </PageTransition>

      <PageTransition visible={currentPage === 2}>
        <PoemPage onContinue={goToNextPage} />
      </PageTransition>

      <PageTransition visible={currentPage === 3}>
        <FinalPage onRestart={restartProposal} />
      </PageTransition>
    </div>
  );
};

export default Index;
