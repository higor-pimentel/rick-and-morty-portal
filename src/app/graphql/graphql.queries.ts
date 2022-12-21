import { gql } from 'apollo-angular';

const GET_ALL_CHARACTERS = gql`
  query ($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        gender
        status
        species
      }
    }
  }
`;

const GET_ALL_LOCATIONS = gql`
  query ($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

const GET_ALL_EPISODES = gql`
  query ($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const COUNT_CHARACTERS_BY_STATUS = gql`
  query {
    aliveCharacters: characters(filter: { status: "Alive" }) {
      ...countCharacters
    }
    deadCharacters: characters(filter: { status: "Dead" }) {
      ...countCharacters
    }
    unknownCharacters: characters(filter: { status: "unknown" }) {
      ...countCharacters
    }
  }

  fragment countCharacters on Characters {
    info {
      count
    }
  }
`;

const COUNT_CHARACTERS_BY_STATUS_SPECIE = gql`
  query ($specie: String) {
    aliveCharacters: characters(filter: { status: "Alive", species: $specie }) {
      ...countCharacters
    }
    deadCharacters: characters(filter: { status: "Dead", species: $specie }) {
      ...countCharacters
    }
    unknownCharacters: characters(
      filter: { status: "unknown", species: $specie }
    ) {
      ...countCharacters
    }
  }

  fragment countCharacters on Characters {
    info {
      count
    }
  }
`;

const GET_CHARACTER = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      gender
      type
      status
      species
      episode {
        id
        name
        episode
        air_date
      }
      location {
        id
        name
        dimension
      }
      origin {
        id
        name
        dimension
      }
      image
    }
  }
`;

const GET_EPISODE = gql`
  query ($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        gender
        status
        image
      }
    }
  }
`;

const GET_LOCATION = gql`
  query ($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
      residents {
        id
        name
        status
        image
      }
    }
  }
`;

const GET_LOCATION_RESIDENTS = gql`
  query ($filter: FilterLocation) {
    locations(filter: $filter) {
      results {
        residents {
          id
          status
        }
      }
    }
  }
`;

export {
  GET_ALL_CHARACTERS,
  GET_CHARACTER,
  GET_ALL_EPISODES,
  GET_EPISODE,
  GET_ALL_LOCATIONS,
  GET_LOCATION,
  GET_LOCATION_RESIDENTS,
  COUNT_CHARACTERS_BY_STATUS,
  COUNT_CHARACTERS_BY_STATUS_SPECIE,
};
