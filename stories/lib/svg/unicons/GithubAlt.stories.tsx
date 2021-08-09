import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GithubAlt, GithubAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GithubAlt",
  component: GithubAlt,
} as ComponentMeta<typeof GithubAlt>;

const Template: ComponentStory<typeof GithubAlt> = (args: GithubAltPropsI) => (
  <x.div display="flex" gap="20px">
    <GithubAlt {...args} />
    <GithubAlt {...args} fill="red.500" />
    <GithubAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
