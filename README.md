<div align="center">

# UNVEIL

**A modern platform for media literacy, bias detection, and news comparison.**

[![Groq](https://img.shields.io/badge/Powered%20by-Groq-FFFFFF?style=for-the-badge&logo=groq)](https://groq.com)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Animated%20with-Framer_Motion-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

</div>

---

## Overview

UNVEIL is a comprehensive media literacy platform designed to help users navigate the complex landscape of modern news. The platform focuses on:

- Detecting bias in news articles and media content
- Comparing viral headlines with underreported but critical stories
- Analyzing media coverage patterns across different sources
- Educating users through interactive media literacy challenges

With a specific focus on Indian media, UNVEIL empowers users to develop critical thinking skills and make more informed judgments about the news they consume.

---

## Features

### Bias Detection Engine
- Real-time analysis of news content for biased language
- Uses a logistic regression model to detect patterns of bias
- Groq-powered LLM for neutral alternative content generation
- Detailed breakdown of bias indicators and confidence scores

### Stories Comparison
- Side-by-side analysis of viral vs. high-impact stories
- Metrics covering accuracy, bias levels, and source diversity
- Categorization of stories based on media attention vs. societal importance

### Media Literacy Challenge
- Interactive game to test and improve media literacy skills
- Progressive difficulty levels: Beginner, Intermediate, Advanced
- Specialized categories: Bias Detection, Fact Checking, Source Analysis, Critical Thinking
- Achievement system and scoring to track improvement

### Analytics Dashboard
- Comprehensive metrics on media coverage patterns
- Visualization of trending topics vs. underreported issues
- Regional and national coverage comparison tools

---

## Technology Stack

### Frontend
- Next.js and React for component architecture
- Tailwind CSS for responsive styling
- Framer Motion for fluid animations
- Shadcn/UI for consistent component design

### AI/ML Integration
- Groq LLM API integration for natural language processing
- Custom logistic regression model for bias detection
- Advanced data processing pipeline

### Data Visualization
- Recharts library for interactive data representation
- Custom visualization components

## Bias Detection Architecture

The bias detection system employs a sophisticated two-stage approach:

1. **Classification**: A logistic regression model trained on a dataset of biased and neutral news articles identifies potentially biased content.

2. **Analysis**: The system breaks down the bias into categories:
   - Emotional language
   - Opinion statements presented as facts
   - Source diversity issues
   - Political leaning indicators
   - Loaded terminology

3. **Rewriting**: When bias is detected, Groq's LLM API is used to generate a more neutral alternative version of the content.

---

## Application Structure

### Dashboard
The main hub showcasing key features including:
- Bias detector tool
- High-impact vs. high-visibility story comparison
- Media literacy game access
- Coverage analysis metrics

### Stories
Detailed analysis of current news stories with:
- Searchable story database
- Filtering by type, region, and coverage
- Detailed metrics for each story
- Comparative analysis tools

### Media Literacy Hub
Educational resources for improving media literacy:
- Learning modules (Understanding Media Bias, Fact-Checking Fundamentals, Source Credibility)
- Progress tracking and achievement system
- Certification track for media analysis
- Interactive learning experience with estimated completion times

### Trends
Data visualization and analysis of media coverage patterns:
- Interactive charts showing coverage distribution trends over time
- Comparison of viral coverage, critical coverage, and public awareness
- Key insights on coverage disparities and media patterns
- Time-based filtering options (1W, 1M, 3M, 6M, 1Y)

### About
Information about the project and team:
- Mission statement and approach
- Key metrics (Stories Analyzed, Active Users, Accuracy Rate)
- Team member profiles with roles and contact information
- Ways to get involved with the project

---

## Configuration

### Backend API
The bias detector communicates with a local API server at `http://localhost:8000/analyze`. Configure the endpoint in `bias-detector.tsx` if needed.

### Styling
The project uses a combination of:
- Tailwind CSS for utility-first styling
- CSS variables for theme colors (accent-primary, accent-secondary)
- Shadcn/UI components for consistent design
- Glass morphism effects for UI elements

---
