import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TvRetro, TvRetroPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TvRetro",
  component: TvRetro,
} as ComponentMeta<typeof TvRetro>;

const Template: ComponentStory<typeof TvRetro> = (args: TvRetroPropsI) => (
  <x.div display="flex" gap="20px">
    <TvRetro {...args} />
    <TvRetro {...args} fill="red.500" />
    <TvRetro {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
