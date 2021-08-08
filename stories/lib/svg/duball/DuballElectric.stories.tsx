import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DuballElectric, DuballElectricPropsI } from "lib/svg";

export default {
  title: "lib/svg/duball/DuballElectric",
  component: DuballElectric,
} as ComponentMeta<typeof DuballElectric>;

const Template: ComponentStory<typeof DuballElectric> = (
  args: DuballElectricPropsI
) => (
  <x.div display="flex" gap="20px">
    <DuballElectric {...args} />
    <DuballElectric
      {...args}
      colorPalette={["blue.500", "red.500", "green.500"]}
    />
    <DuballElectric {...args} />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px" };
