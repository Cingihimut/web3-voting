//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    uint256 public candidatesCount;
    address public owner;

    mapping(uint256 => Candidate) public candidates;
    mapping(address => bool) public registeredVoters;
    mapping(address => bool) public votedOrNot;

    event CandidateAdded(uint256 indexed id, string name);
    event VoteCast(address indexed voter, uint256 indexed candidateId);

    constructor() {
        owner = msg.sender;
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    function addCandidate(string memory name) public onlyOwner {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
        
        emit CandidateAdded(candidatesCount, name);
    }

    function registerVoter(address _voter) public onlyOwner {
        registeredVoters[_voter] = true;
    }

    function vote(uint256 _candidateId) public {
        require(registeredVoters[msg.sender], "You are not registered to vote");
        require(!votedOrNot[msg.sender], "You have already voted");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate ID");

        candidates[_candidateId].voteCount++;

        votedOrNot[msg.sender] = true;

        emit VoteCast(msg.sender, _candidateId);
    }
}
