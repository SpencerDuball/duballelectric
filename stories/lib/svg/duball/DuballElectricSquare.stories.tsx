import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DuballElectricSquare, DuballElectricSquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/duball/DuballElectricSquare",
  component: DuballElectricSquare,
} as ComponentMeta<typeof DuballElectricSquare>;

const Template: ComponentStory<typeof DuballElectricSquare> = (
  args: DuballElectricSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <DuballElectricSquare {...args} />
    <DuballElectricSquare
      {...args}
      colorPalette={["blue.500", "red.500", "green.500"]}
    />
    <DuballElectricSquare {...args} />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { h: "50px", w: "50px" };
