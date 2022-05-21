import { useState, useEffect } from "react";

export default function SearchBar({user, filter, setFilter, type}){

  const collaboratorSearch = () => {
    return
  }

  const projectSearch = () => {
    return
  }

  return type === 'collaborator' ? collaboratorSearch() : projectSearch();
}
